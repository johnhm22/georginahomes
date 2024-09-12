'use server';

import React from 'react';
import prisma from '../lib/db';
import Properties2 from './Properties2';

const GetData = async () => {
  const properties = await prisma.properties.findMany();
  const allProperties = JSON.stringify(properties);

  console.log('properties: ', properties);

  return (
    <section>
      <Properties2 properties={allProperties} />;
    </section>
  );
};

export default GetData;
