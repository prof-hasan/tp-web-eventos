import './globals.css';
import '@repo/design-system/styles.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { PropsWithChildren } from 'react';
import { Footer, Header } from '@repo/design-system/organisms';
import { cn } from '@repo/design-system/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Eventos',
  description: 'App to manage events.',
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang='en'>
      <body className={cn(inter.className, 'w-screen, h-screen')}>
        <Header />
        <div className='h-full'>{children}</div>
        <Footer />
      </body>
    </html>
  );
};
export default RootLayout;
