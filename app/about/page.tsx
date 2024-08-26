import { notFound } from 'next/navigation';
import { asText } from '@prismicio/client';
import { PrismicRichText, SliceZone } from '@prismicio/react';

import { createClient } from '@/prismicio';
import { components } from '@/slices';

type Params = { uid: string };

// export async function generateMetadata({ params }: { params: Params }) {
//   const client = createClient();
//   const page = await client.getByUID('about', params.uid);
//   const settings = await client.getSingle('settings');

//   return {
//     title: `${asText(page.data.title)} — ${asText(settings.data.site_title)}`,
//     description: page.data.meta_description
//   };
// }

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    // .getByUID('about', params.uid)
    .getSingle('about')
    .catch(() => notFound());

  return (
    <section
      className='h-screen w-full items-center bg-[url("https://images.prismic.io/georginahomes/ZsMK4kaF0TcGJC7V_adam-winger-t4oVP2xFMJ8-unsplash.jpg?auto=format,compress")]
     bg-cover'
    >
      {/* <div className='absolute'> */}
      <div className='flex-cols  flex h-full w-full items-center justify-center backdrop-blur-md'>
        <div className='mb-16 mt-10 flex w-2/3 flex-col items-center p-5'>
          <div className='mb-2 text-2xl font-semibold '>{page.data.title}</div>
          <PrismicRichText
            field={page.data.description}
            components={{
              paragraph: ({ children }) => (
                <p className=' mb-5 pt-5 text-xl font-normal'>{children}</p>
              )
            }}
          />

          <SliceZone slices={page.data.slices} components={components} />
        </div>
      </div>
    </section>
  );
}
