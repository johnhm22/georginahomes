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

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle('homepage');
  // const type = await client.getAllByType('homepage');
  // console.log('type', type);

  const calthorpe = await client.getByTag('C6 Calthorpe');
  const tag = await client.getByTag('Property 1');
  // console.log('C6 Calthorpe', calthorpe);
  // console.log('Property 1', tag);
  // console.log('client.getFirst()', await client.getFirst());
  // console.log('getByID', await client.getByID('ZrXXzREAACMAO0A8'));
  // console.log('getAllByType', await client.getAllByType('testimonial'));

  // const settings = await client.getAllByType('settings');
  // console.log('getAllByType settings[0] etc', settings[0].data.navigation);

  // console.log('getRepo', await client.getRepository());
  // console.log('getRefs', await client.getRefs());
  // console.log('getTags', await client.getTags());

  return <SliceZone slices={page.data.slices} components={components} />;
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
