import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `Property2`.
 */
export type Property2Props = SliceComponentProps<Content.Property2Slice>;

/**
 * Component for "Property2" Slices.
 */
const Property2 = ({ slice }: Property2Props): JSX.Element => {
  console.log('slice from Property tab: ', slice);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for property2 (variation: {slice.variation}) Slices
    </section>
  );
};

export default Property2;
