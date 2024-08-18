import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `Testing`.
 */
export type TestingProps = SliceComponentProps<Content.TestingSlice>;

/**
 * Component for "Testing" Slices.
 */
const Testing = ({ slice }: TestingProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for testing (variation: {slice.variation}) Slices
    </section>
  );
};

export default Testing;
