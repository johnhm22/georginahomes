//data access layer providing one single point for accessing database

import 'server-only';

import prisma from '../lib/db';

export const getProperties = async () => {
  //add in authentication check if necessary
  const properties = await prisma.properties.findMany();
  const allProperties = JSON.stringify(properties);
  return allProperties;
  // return properties;
};

export const updateProperty = async (id: string, data: {}) => {
  //add in authentication to check user is logged in
  //add in authentication to check user is admin
  //option to add in logging to check who is updating the db
};
