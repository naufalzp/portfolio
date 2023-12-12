import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'Naufal Zhafif - Portfolio',
  description:
    'Portfolio website of Naufal Zhafif, a full stack developer specializing in building web applications with React, Next.js and Node.js. Located in Indonesia.',
  canonical: 'https://naufalzp.me',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://naufalzp.me',
    title: 'Naufal Zhafif - Portfolio',
    description:
      'Portfolio website of Naufal Zhafif, a full stack developer specializing in building web applications with React, Next.js and Node.js. Located in Indonesia.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='snap-y snap-mandatory scroll-smooth'>
      <body
        className={`${montserrat.className} bg-white text-black dark:bg-neutral-900 dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
