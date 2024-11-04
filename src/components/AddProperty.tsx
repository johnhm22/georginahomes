'use client';

import React, { FormEvent, MutableRefObject, useRef } from 'react';
import { Button } from './ui/button';

interface DialogRefProps {
  dialogRef: MutableRefObject<HTMLFormElement | null>;
}

const AddProperty = ({ dialogRef }: DialogRefProps) => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.alert('Currently in test mode');
    formRef.current!.reset();
    dialogRef.current!.close();
  };

  const handleCancel = () => {
    formRef.current?.reset();
    dialogRef.current?.close();
  };

  return (
    <section>
      <div className='container h-max w-auto  border bg-slate-100 '>
        <h2 className='mb-4 mt-2 text-lg font-semibold'>Add a new property</h2>
        <form
          className='flex flex-col gap-2 py-2'
          onSubmit={handleSubmit}
          method='dialog'
          ref={formRef}
        >
          <input
            name='title'
            type='text'
            className='rounded-lg border px-2 py-2'
            placeholder='title'
            id='title'
            // required
          />
          <input
            name='rent'
            type='text'
            className='rounded-lg border px-2 py-2'
            placeholder='monthly rent'
            // required
          />
          <input
            type='text'
            name='address'
            className='rounded-lg border px-2 py-2'
            placeholder='address'
            // required
          />
          <input
            type='text'
            name='listed date'
            className='rounded-lg border px-2 py-2'
            placeholder='listed date'
            // required
          />
          <input
            type='text'
            name='available date'
            className='rounded-lg border px-2 py-2'
            placeholder='available date'
            // required
          />
          <textarea
            name='description'
            className='rounded-lg border px-2 py-2'
            placeholder='description'
            // required
            // rows='5'
          />
          <span>
            <input
              type='text'
              name='photos'
              className='mb-1 w-full rounded-lg border px-2 py-2'
              placeholder='link to photos'
            />
            <p className='text-xs'>Multiple photos can be added as a url.</p>
            <p className='text-xs'>Separate each url with a comma</p>
          </span>
          <span className='flex flex-row justify-end gap-2'>
            <Button onClick={handleCancel} variant='destructive' type='button'>
              Cancel
            </Button>
            <Button variant='add' type='submit'>
              Add
            </Button>
          </span>
        </form>
      </div>
    </section>
  );
};

export default AddProperty;
