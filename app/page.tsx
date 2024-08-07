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
//       <div className='container'>
//         <h1 className='mb-2 text-3xl font-bold'>Georgina Homes</h1>
//       </div>
//     </section>
//   );
// }

import { Metadata } from 'next';
import { SliceZone } from '@prismicio/react';

import { createClient } from '@/prismicio';
// import { components } from '@/slices';

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle('homepage');

  return (
    <div className='py-24 text-3xl text-blue-500'>
      Georgina Homes - it works!
    </div>
  );

  // return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle('homepage');

  return {
    title: page.data.meta_title,
    description: page.data.meta_description
  };
}
