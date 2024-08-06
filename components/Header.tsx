import React from 'react';
import { createClient } from '@/prismicio';
import { PrismicNextLink } from '@prismicio/next';
import Link from 'next/link';

const Header = async () => {
  const client = createClient();
  const settings = await client.getSingle('settings');
  return (
    <header className='flex flex-row justify-between px-2 py-4'>
      <Link href='/'>{settings.data.site_title}</Link>

      <nav>
        <ul className='flex flex-row gap-4'>
          {settings.data.navigation.map(item => (
            <li key={item.label}>
              <PrismicNextLink field={item.link}>{item.label}</PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
