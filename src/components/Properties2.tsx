'use client';

import React, { useCallback } from 'react';

import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

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

const Properties2 = ({ properties }: { properties: string }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const allProperties: Property = JSON.parse(properties);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
    // if(onButtonClick) onButtonClick(emblaApi)
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className='mx-auto mt-12 flex w-4/5 flex-col items-center gap-3 p-4'>
      {allProperties?.map(property => (
        <div
          key={property.id}
          className='my-2 flex flex-row gap-2 rounded-lg border p-4 shadow-lg'
        >
          <div className='embla relative mx-auto max-w-lg'>
            <div className='embla__viewport h-80' ref={emblaRef}>
              <div className='embla__container h-full'>
                {property.photos.map((photo, index) => (
                  <div
                    key={index}
                    className='embla__slide flex items-center justify-center'
                  >
                    <img
                      // className='embla__slide__img'
                      src={photo}
                      alt='photo'
                    />
                  </div>
                ))}
              </div>
            </div>
            {property.photos.length ? (
              <div className='mt-3 flex justify-between'>
                <button
                  className='absolute left-2 top-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 bg-opacity-50 hover:bg-white'
                  onClick={scrollPrev}
                >
                  <ArrowLeft className='h-4 w-4' />
                </button>
                <button
                  className='absolute right-2 top-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 bg-opacity-50 hover:bg-white'
                  onClick={scrollNext}
                >
                  <ArrowRight className='h-4 w-4' />
                </button>
              </div>
            ) : null}
            {property.photos.length && (
              <div className='absolute bottom-6 right-3 flex h-6 w-6 items-center justify-center rounded-3xl bg-slate-300  '>
                {property.photos.length}
              </div>
            )}
            <div className='absolute bottom-4 left-0 right-0'>
              <div className='mb-1 flex items-center justify-center gap-2'>
                {property.photos.map((_, index) => (
                  <div
                    key={index}
                    className={`h-3 w-3 rounded-full bg-white  `}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          <div className='flex w-1/2 flex-col'>
            <div className='mb-2 text-2xl font-bold'>
              <>{property.monthly_rent}PCM</>
            </div>
            <div className='mb-1 text-xl font-semibold'>{property.title}</div>
            <div className='mb-2 text-slate-500'>{property.address}</div>
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

export default Properties2;
