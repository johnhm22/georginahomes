import React from 'react';
import { createClient } from '@/prismicio';
import { PrismicNextLink } from '@prismicio/next';
import Link from 'next/link';

const Footer = async () => {
  const client = createClient();
  const settings = await client.getSingle('settings');
  return (
    <footer className='flex flex-row justify-between px-2'>
      <Link href='/'>{settings.data.site_title}</Link>
      <p className='text-xs'>
        &copy; {new Date().getFullYear()} {settings.data.site_title}
      </p>
      <ul className='flex flex-row gap-4'>
        {settings.data.navigation.map(item => (
          <li key={item.label}>
            <PrismicNextLink field={item.link}>{item.label}</PrismicNextLink>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
