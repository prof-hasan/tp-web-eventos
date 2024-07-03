'use client';

import { PropsWithChildren } from 'react';
import { Header } from './header';
import { Footer } from './footer';

export const LayoutProvider = ({ children }: PropsWithChildren) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};
