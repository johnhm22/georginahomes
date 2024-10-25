import Properties from '@/src/components/Properties';
import { Content } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  // console.log('slice.primary.image from Hero: ', slice.primary.image);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      // className='border border-red-500 px-4 py-10 md:px-6 md:py-14 lg:py-16'
    >
      <div className='flex flex-col justify-center'>
        <div className='flex justify-center'>
          <div className='absolute px-2 py-2 text-center'>
            <PrismicRichText
              field={slice.primary.heading}
              components={{
                heading1: ({ children }) => (
                  <h1 className='font-display py-6 text-2xl md:text-6xl'>
                    {children}
                  </h1>
                )
              }}
            />
            <PrismicRichText
              field={slice.primary.body}
              components={{
                paragraph: ({ children }) => (
                  <p className='font-body text-lg font-normal leading-10 md:text-3xl'>
                    {children}
                  </p>
                )
              }}
            />
          </div>
          <PrismicNextImage
            field={slice.primary.image}
            className='100vw'
            alt=''
          />
        </div>

        <h2 className='font-display mt-16 flex justify-center text-4xl'>
          {slice.primary.property_heading}
        </h2>
      </div>
      <Properties />
    </section>
  );
};

export default Hero;
