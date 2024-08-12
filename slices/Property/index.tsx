import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `Property`.
 */
export type PropertyProps = SliceComponentProps<Content.PropertySlice>;

/**
 * Component for "Property" Slices.
 */
const Property = ({ slice }: PropertyProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for property (variation: {slice.variation}) Slices
    </section>
  );
};

export default Property;
