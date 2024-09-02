'use client';

import { Content } from '@prismicio/client';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import Image from 'next/image';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

/**
 * Props for `Property`.
 */
export type PropertyProps = SliceComponentProps<Content.PropertySlice>;

/**
 * Component for "Property" Slices.
 */
const Property = async ({ slice }: PropertyProps): Promise<JSX.Element> => {
  /*
  Below is field entry for PrismicNextImage
  *** item *** {
    property_photo: {
      dimensions: { width: 500, height: 400 },
      alt: 'Third Bedroom',
      copyright: null,
      url: 'https://images.prismic.io/georginahomes/ZrnZAUaF0TcGI2wV_IMG_20210410_152005_hdr.jpg?auto=format%2Ccompress&rect=0%2C922%2C3456%2C2765&w=500&h=400',
      id: 'ZrnZAUaF0TcGI2wV',
      edit: { x: 0, y: 922, zoom: 1, background: 'transparent' }
    }
  }
*/

  // console.log('**** slice.primary.photos ****: ', slice.primary.photos);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className='mt-12 flex justify-center'
    >
      <div className='my-2 flex w-2/3 flex-row gap-2 rounded-lg border p-4 shadow-lg'>
        <div>
          <Carousel className='w-full max-w-xs'>
            <CarouselContent>
              {slice.primary.photos.map((item, index) => (
                <CarouselItem key={index}>
                  <Image
                    src={item.property_photo.url || ''} //need to enter default
                    alt={item.property_photo.alt || ''}
                    height={400}
                    width={500}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            {slice.primary.photos.length > 1 ? <CarouselPrevious /> : null}
            {slice.primary.photos.length > 1 ? <CarouselNext /> : null}
          </Carousel>
        </div>
        <div className='flex w-1/2 flex-col'>
          <div className='mb-2 text-2xl font-bold'>
            <>{slice.primary.monthly_rent} PCM</>
          </div>
          <div className='mb-1 text-xl font-semibold'>
            <>{slice.primary.title}</>
          </div>
          <div className='mb-2 text-slate-500'>
            <>{slice.primary.address}</>
          </div>
          <PrismicRichText
            field={slice.primary.description}
            components={{
              paragraph: ({ children }) => (
                <p className='mb-2 text-base sm:text-left'>{children}</p>
              )
            }}
          />
          <div className='text-sm'>
            <div>
              <>Listed on: {slice.primary.list_date}</>
            </div>
            <div>
              <>Available from: {slice.primary.available_from}</>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Property;
