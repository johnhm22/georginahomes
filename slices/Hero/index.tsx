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
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className='relative mb-4 flex justify-center'>
        <div className='absolute px-2 py-2 text-yellow-700'>
          <PrismicRichText
            field={slice.primary.heading}
            components={{
              heading1: ({ children }) => (
                <h1 className='font-display text-3xl font-bold md:text-7xl'>
                  {children}
                </h1>
              )
            }}
          />
          <PrismicRichText
            field={slice.primary.body}
            components={{
              paragraph: ({ children }) => (
                <p className='font-body mb-4 text-lg font-normal leading-10 md:text-4xl'>
                  {children}
                </p>
              )
            }}
          />
        </div>
        <PrismicNextImage
          field={slice.primary.image}
          className='rounded-2xl'
          width={900}
          height={500}
        />
      </div>
    </section>
  );
};

export default Hero;
