'use server';

import React from 'react';
import prisma from '../lib/db';
import Properties from './Properties';
import { amendProperty } from '../actions/updateProperty';

const GetData = async () => {
  const properties = await prisma.properties.findMany();
  const allProperties = JSON.stringify(properties);
  return (
    <section>
      <Properties allProperties={allProperties} amendProperty={amendProperty} />
      ;
    </section>
  );
};

export default GetData;
