import React from 'react';
import { createClient } from '@/prismicio';
import { PrismicNextLink } from '@prismicio/next';
import Link from 'next/link';

const Footer = async () => {
  const client = createClient();
  const settings = await client.getSingle('settings');
  return (
    <footer className='flex flex-row justify-center px-2'>
      <p className='text-xs'>
        &copy; {new Date().getFullYear()} {settings.data.site_title}
      </p>
    </footer>
  );
};

export default Footer;
