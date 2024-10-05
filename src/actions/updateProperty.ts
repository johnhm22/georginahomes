'use server';

import { updateProperty } from '../data-access-layer/property-data';

export const amendProperty = async (id: string) => {
  const newData = await updateProperty(id);

  return null;
};
