import type { Metadata } from 'next';
import { Nunito, Nunito_Sans } from 'next/font/google';
import { createClient } from '@/prismicio';
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';
import clsx from 'clsx';
import './globals.css';

// const inter = Inter({ subsets: ['latin'] });

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap'
});
const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans',
  display: 'swap'
});

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const settings = await client.getSingle('settings');

  return {
    manifest: '/manifest.json',
    title: settings.data.site_title || 'Georgina Homes',
    description: settings.data.meta_description || 'Georgina Homes helping you',
    openGraph: {
      images: [settings.data.og_image.url || '']
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
      <body
        className={clsx(nunito.variable, nunitoSans.variable, 'bg-slate-50')}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
