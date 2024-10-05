'use client';

import React, { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from './ui/carousel';
import UpdateForm from './UpdateForm';

type Property = {
  id: string;
  title: string;
  slug: string;
  monthly_rent: number;
  address: string;
  description: string;
  list_date: string | null;
  available_from_date: string | null;
  photos: string[];
  updatedAt: Date;
  createdAt: Date;
};

type AmendProperty = (id: string) => Promise<null>;

const Properties = ({
  allProperties,
  amendProperty
}: {
  allProperties: string;
  amendProperty: AmendProperty;
}) => {
  const properties: Property[] = JSON.parse(allProperties);

  const [updateFormVisible, setUpdateFormVisibility] = useState<boolean>(false);

  const handleOnClick = (property: Property) => {
    console.log('*** property ***', property);
    setUpdateFormVisibility(true);
    amendProperty(property.id);
  };

  const handleClose = () => {
    setUpdateFormVisibility(false);
  };

  return (
    <section className='mt-12 flex flex-col items-center gap-3 border border-blue-500'>
      {properties.map(property => (
        <div
          key={property.id}
          className='my-2 flex w-2/3 flex-row gap-2 rounded-lg border p-4 shadow-lg'
          onClick={() => {
            handleOnClick(property);
          }}
        >
          <div className='w-1/2'>
            <Carousel className='embla_container relative h-full w-full'>
              <CarouselContent>
                {property.photos.map((photo, index) => (
                  <CarouselItem
                    key={index}
                    className='embla__slide flex h-80 items-center justify-center'
                  >
                    <div>
                      <img
                        src={photo}
                        alt='rental photo'
                        className='embla_slide_img'
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {property.photos.length > 1 ? <CarouselPrevious /> : null}
              {property.photos.length > 1 ? <CarouselNext /> : null}
            </Carousel>
          </div>
          <div className='flex w-1/2 flex-col'>
            <div className='mb-2 text-2xl font-bold'>
              <>£{property.monthly_rent} PCM</>
            </div>
            <div className='mb-1 text-xl font-semibold'>
              <>{property.title}</>
            </div>
            <div className='mb-2 text-slate-500'>
              <>{property.address}</>
            </div>

            <p className='mb-2 text-base sm:text-left'>
              {property.description}
            </p>

            <div className='text-sm'>
              <div>
                <>Listed on: {property.list_date}</>
              </div>
              <div>
                <>Available from: {property.available_from_date}</>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className='absolute mt-5 flex h-4/6 w-1/2 rounded-sm py-4 pl-4'>
        {updateFormVisible && <UpdateForm handleClose={handleClose} />}
      </div>
    </section>
  );
};

export default Properties;
