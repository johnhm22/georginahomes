import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `ContactUs`.
 */
export type ContactUsProps = SliceComponentProps<Content.ContactUsSlice>;

/**
 * Component for "ContactUs" Slices.
 */
const ContactUs = ({ slice }: ContactUsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className='flex w-full justify-center'
    >
      <div className='mb-10 flex w-max flex-col items-center gap-2'>
        <div className='text-xl font-semibold'>{slice.primary.title}</div>
        <div className='text-sm font-semibold md:text-base'>
          {slice.primary.email}
        </div>
        <div className='text-sm font-semibold md:text-base'>
          {slice.primary.contact_number}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
