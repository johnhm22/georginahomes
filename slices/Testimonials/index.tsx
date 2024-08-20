import { Content } from '@prismicio/client';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';

/**
 * Props for `Testimonials`.
 */
export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

/**
 * Component for "Testimonials" Slices.
 */
const Testimonials = ({ slice }: TestimonialsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className='mb-6 flex justify-center py-4'
    >
      <section className='grid w-2/3 grid-cols-1 bg-slate-50 text-center opacity-70'>
        <PrismicRichText
          field={slice.primary.heading}
          components={{
            heading2: ({ children }) => (
              <h2 className=' pt-5 text-xl font-semibold'>{children}</h2>
            )
          }}
        />
        <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
          <>
            {slice.primary.testimonial.map((item, index) => (
              // Render the item
              <div
                key={index}
                className='grid w-full max-w-6xl content-between p-4'
              >
                <PrismicRichText
                  field={item.quote}
                  components={{
                    paragraph: ({ children }) => (
                      <p className='mb-2 text-base sm:text-left'>{children}</p>
                    )
                  }}
                />
                <p className='font-semibold text-slate-700'>{item.name}</p>
              </div>
            ))}
          </>
        </div>
      </section>
    </section>
  );
};

export default Testimonials;
