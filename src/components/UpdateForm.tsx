import React from 'react';

type HandleClose = () => void;

const UpdateForm = ({ handleClose }: { handleClose: HandleClose }) => {
  return (
    <form className='flex w-full flex-col gap-10 border border-blue-500 bg-slate-50'>
      <h2 className='flex justify-center font-semibold'>
        Update Property Details
      </h2>
      <div className='flex flex-row gap-3 border border-red-600'>
        <label htmlFor='title' id='title'>
          Title
        </label>
        <input
          name='title'
          type='text'
          className='border-2'
          id='title'
          placeholder='title'
        />{' '}
      </div>
      <div className='flex flex-row gap-3'>
        <label htmlFor='rent' id='rent'>
          Monthly rent
        </label>
        <input name='rent' type='text' id='rent' placeholder='Monthly rent' />
      </div>
      <div className='flex flex-row gap-3'>
        <label htmlFor='address' id='address'>
          Address
        </label>
        <input name='address' type='text' id='address' placeholder='address' />
      </div>
      <div className='flex flex-row gap-3'>
        <label htmlFor='description' id='description'>
          Description
        </label>
        <textarea
          name='description'
          id='description'
          placeholder='description'
          cols={60}
          className='overflow-y-auto'
          rows={5}
        />
      </div>
      <button onClick={handleClose}>Close</button>
    </form>
  );
};

export default UpdateForm;
