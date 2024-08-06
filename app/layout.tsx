import type { Metadata, ResolvingMetadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { createClient } from '@/prismicio';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const page = await client.getSingle('settings');

  return {
    title: page.data.site_title || 'Georgina Homes',
    description: page.data.meta_description || 'Georgina Homes helping you',
    openGraph: {
      images: [page.data.og_image.url || '']
    }
  };
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <header>Header</header>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}
