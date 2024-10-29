import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from './ui/carousel';
import { getProperties } from '../data-access-layer/property-data';

type Properties = {
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
}[];

const Properties = async () => {
  const properties: Properties = JSON.parse(await getProperties());

  return (
    <section className='mt-4 flex flex-col items-center gap-3 md:mt-12'>
      {properties.map(property => (
        <div
          key={property.id}
          className='my-2 flex w-4/5 flex-col gap-2 rounded-lg border p-4 shadow-lg sm:w-3/5 md:w-4/5 md:flex-row'
        >
          <div className='w-full border border-amber-400 md:w-1/2'>
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
          <div className='flex w-full flex-col md:w-1/2'>
            <div className='mb-2 text-lg font-bold md:text-2xl'>
              <>£{property.monthly_rent} PCM</>
            </div>
            <div className='text- mb-1 text-base font-semibold md:text-xl'>
              <>{property.title}</>
            </div>
            <div className='mb-2 text-sm text-slate-500 md:text-base'>
              <>{property.address}</>
            </div>

            <p className='mb-2 text-sm sm:text-left md:text-base'>
              {property.description}
            </p>

            <div className='text-xs md:text-sm'>
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
    </section>
  );
};

export default Properties;
