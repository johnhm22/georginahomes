'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import AddProperty from './AddProperty';

const Header = () => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleClick = () => {
    setShowMenu(preVal => !preVal);
  };

  return (
    <header className='sticky top-0 flex min-h-14 flex-row justify-between bg-slate-50 px-2 py-4'>
      <span className='flex flex-row items-center gap-2'>
        {/* <Link className='text-xl font-normal text-slate-500' href='/'>
          {settings.data.site_title}
        </Link> */}
        <Link className='text-xl font-normal text-slate-500' href='/'>
          Georgina Homes
        </Link>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='1em'
          height='1em'
          viewBox='0 0 576 512'
        >
          <path d='M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z' />
        </svg>
      </span>
      <span className='flex flex-col border border-cyan-500  '>
        <img
          src={showMenu ? '././close.png' : '././hamburger.png'}
          alt='menu icon'
          height={20}
          width={30}
          onClick={handleClick}
          className='visible absolute right-4 hover:cursor-pointer sm:invisible'
        />
        {showMenu && (
          <nav className='absolute right-4 mt-10 flex flex-col gap-2 border border-blue-500 bg-slate-50 font-normal text-slate-500 sm:invisible'>
            <p
              onClick={() => {
                dialogRef.current?.showModal();
              }}
              className='cursor-pointer'
            >
              Add Property
            </p>

            <dialog ref={dialogRef} className='w-1/3 rounded-lg shadow-sm'>
              <AddProperty dialogRef={dialogRef} />
            </dialog>
            <Link href='/about'>About/Contact Us</Link>
          </nav>
        )}
      </span>

      <nav className='invisible flex flex-row gap-4 font-normal text-slate-500 sm:visible'>
        <p
          onClick={() => {
            dialogRef.current?.showModal();
          }}
          className='cursor-pointer'
        >
          Add Property
        </p>

        <dialog ref={dialogRef} className='w-1/3 rounded-lg shadow-sm'>
          <AddProperty dialogRef={dialogRef} />
        </dialog>
        <Link href='/about'>About/Contact Us</Link>
      </nav>
    </header>
  );
};

export default Header;