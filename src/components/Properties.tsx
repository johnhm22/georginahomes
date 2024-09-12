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

const Properties = async () => {
  // const [emblaRef] = useEmblaCarousel();

  const properties = await prisma.properties.findMany();
  return (
    <section
      className='mt-12 flex flex-col items-center gap-3 border border-red-500'
      // ref={emblaRef}
    >
      {properties.map(property => (
        <div
          key={property.id}
          className='my-2 flex w-2/3 flex-row gap-2 rounded-lg border border-blue-500 p-4 shadow-lg'
        >
          <div className='w-1/2 border border-green-500'>
            <Carousel className='embla_container h-48 border border-red-500'>
              <CarouselContent>
                {property.photos.map((photo, index) => (
                  <CarouselItem key={index}>
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
          <div className='flex w-1/2 flex-col border border-purple-600'>
            <div className='mb-2 text-2xl font-bold'>
              <>{property.monthly_rent} PCM</>
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
