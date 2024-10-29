'use client';

import React from 'react';

const Pagination = () => {
  return (
    <div className='flex w-2/3 flex-row justify-between'>
      <p
        onClick={() => {
          console.log('Back button clicked');
        }}
        className='rounded-md border border-black px-4 py-1 font-semibold'
      >
        Back
      </p>
      <p
        onClick={() => {
          console.log('Next button clicked');
        }}
        className='rounded-md border border-black px-4 py-1 font-semibold'
      >
        Next
      </p>
    </div>
  );
};

export default Pagination;
