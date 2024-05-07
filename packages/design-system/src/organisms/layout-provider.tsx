'use client';

import { type PropsWithChildren } from 'react';

export const LayoutProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};
