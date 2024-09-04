// import { ThemeToggle } from '@/components/theme-toggle';
// import { Button } from '@/components/ui/button';
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardTitle
// } from '@/components/ui/card';

// export default function Home() {
//   return (
//     <section className='border border-red-500 py-24'>
//       <div className=''>
//         <h1 className='mb-2 text-3xl font-bold'>Georgina Homes</h1>
//       </div>
//     </section>
//   );
// }

import { Metadata } from 'next';
import { SliceZone } from '@prismicio/react';

import { createClient } from '@/prismicio';
import { components } from '@/slices';
import Filter from '@/components/Filter';

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle('homepage');
  const calthorpe = await client.getByTag('C6 Calthorpe');
  const tag = await client.getByTag('Property 1');

  // console.log('page.data.slices: ', page.data.slices);

  return (
    <>
      <SliceZone slices={page.data.slices} components={components} />;
      <Filter />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle('homepage');
  // console.log('homepage', page);

  return {
    title: page.data.meta_title,
    description: page.data.meta_description
  };
}
