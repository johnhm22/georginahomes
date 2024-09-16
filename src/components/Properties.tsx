import React from 'react';
import prisma from '../lib/db';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from './ui/carousel';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';

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
}[];

const Properties = async ({ properties }: { properties: string }) => {
  // const [emblaRef] = useEmblaCarousel();

  const allProperties: Property = JSON.parse(properties);

  // const props = await prisma.properties.findMany();
  return (
    <section
      className='mt-12 flex flex-col items-center gap-3'
      // ref={emblaRef}
    >
      {allProperties.map(property => (
        <div
          key={property.id}
          className='my-2 flex w-2/3 flex-row gap-2 rounded-lg border p-4 shadow-lg'
        >
          <div className='flex w-1/2'>
            <Carousel className='embla_container relative h-full w-full'>
              <CarouselContent>
                {property.photos.map((photo, index) => (
                  <CarouselItem
                    className='embla__slide flex h-80 items-center justify-center'
                    key={index}
                  >
                    <div>
                      <img src={photo} alt='rental photo' className='' />
                    </div>
                  </CarouselItem>
                ))}
                {property.photos.length && (
                  <div className='absolute bottom-6 right-3 flex h-6 w-10 items-center justify-center rounded-lg bg-gray-200  '>
                    <span className='inline-flex items-center justify-between gap-1 text-sm'>
                      <Image
                        src='/camera.png'
                        title='camera icon'
                        height={15}
                        width={15}
                        alt='camera'
                      />

                      {property.photos.length}
                    </span>
                  </div>
                )}
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
    </section>
  );
};

export default Properties;
