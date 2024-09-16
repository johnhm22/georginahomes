'use server';

import React from 'react';
import prisma from '../lib/db';
import Properties2 from './Properties2';
import Properties from './Properties';

const GetData = async () => {
  const properties = await prisma.properties.findMany();
  const allProperties = JSON.stringify(properties);

  console.log('properties: ', properties);

  return (
    <section>
      <Properties properties={allProperties} />;
    </section>
  );
};

export default GetData;
