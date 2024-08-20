'use client';

import { Content } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { Item } from '@radix-ui/react-dropdown-menu';
import { useEffect, useState } from 'react';

/**
 * Props for `Property`.
 */
export type PropertyProps = SliceComponentProps<Content.PropertySlice>;

/**
 * Component for "Property" Slices.
 */
const Property = ({ slice }: PropertyProps): JSX.Element => {
  // const [currentImage, setCurrentImage] = useState<>(null);

  // console.log('*** slice ***:', slice.id);

  // slice.primary.photos.map(item =>
  //   // console.log('************')
  //   // console.log('*** item ***', item)
  //   // console.log('************')
  //   imageArray.push(...item.primary.photos)
  // );

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

  // console.log('**** slice.primary.photos[0] ****: ', slice.primary.photos[0]);

  const imageArray: Content.PropertySliceDefaultPrimaryPhotosItem[] = [];
  const displayImages = () => {
    slice.primary.photos.map(item => {
      imageArray.push(item);
    });
    // console.log('imageArray: ', imageArray);
    console.log('*** slice from displayImages***:', slice.id);
    return null;
  };

  // let imageIndex = 0;
  const handleOnClick = (e: React.MouseEvent<HTMLElement>) => {
    console.log('onClick clicked');
    // imageIndex += 1;

    console.log('*** e ***', e);
    // console.log('*** e.currentTarget ***', e.currentTarget);
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className='flex justify-center'
    >
      <div className='my-2 flex w-2/3 flex-row gap-2 rounded-lg border p-4 shadow-lg'>
        {displayImages()}
        {/* <PrismicNextImage field={slice.primary.photos[0]!.property_photo} /> */}
        <div className='relative z-0'>
          {slice.primary.photos.length === 1 ? (
            <PrismicNextImage field={imageArray[0].property_photo} />
          ) : (
            <PrismicNextImage field={imageArray[2].property_photo} />
          )}
          {imageArray.length > 1 ? (
            <p
              className='z-1 absolute -right-0 top-44 cursor-pointer pr-2 text-2xl font-bold'
              onClick={handleOnClick}
            >
              X
            </p>
          ) : null}
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
