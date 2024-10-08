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
      className='flex w-2/3 justify-center'
    >
      <div className='mb-10 flex w-2/3 flex-col items-center'>
        <div className='mb-2 text-xl font-semibold'>{slice.primary.title}</div>
        <div className='mb-1 font-semibold'>{slice.primary.email}</div>
        <div className='font-semibold'>{slice.primary.contact_number}</div>
      </div>
    </section>
  );
};

export default ContactUs;
