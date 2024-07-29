'use client';

import { PropsWithChildren } from 'react';
import { Header } from './header';
import { Footer } from './footer';

export const LayoutProvider = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer className="mt-auto" />
    </div>
  );
};
