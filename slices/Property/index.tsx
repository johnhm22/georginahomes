import { Content } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';

/**
 * Props for `Property`.
 */
export type PropertyProps = SliceComponentProps<Content.PropertySlice>;

/**
 * Component for "Property" Slices.
 */
const Property = ({ slice }: PropertyProps): JSX.Element => {
  // console.log('slice: ', slice);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className='flex justify-center'
    >
      <div className='my-2 flex w-2/3 flex-row gap-2 rounded-lg border p-4 shadow-lg'>
        <div className=''>
          {slice.primary.photos.map((item, index) =>
            // Render the item
            // Need to add a unique key for the map

            slice.primary.photos.length === 1 ? (
              <div key={index}>
                <PrismicNextImage
                  field={item.property_photo}
                  // width={500}
                  // height={400}
                  // className='object-fill'
                  // imgixParams={{ min }}

                  // className='object-cover'
                  // imgixParams={{ fit: 'fillmax' }}
                />
              </div>
            ) : null
          )}
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
