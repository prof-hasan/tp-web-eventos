import './globals.css';
import '@repo/design-system/styles.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { PropsWithChildren } from 'react';
import { LayoutProvider } from '@repo/design-system/organisms';
import { cn } from '@repo/design-system/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Eventos',
  description: 'App to manage events.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang='en'>
      <body className={cn(inter.className, 'w-screen, h-screen')}>
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
};
export default RootLayout;
