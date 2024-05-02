'use client';

import { ConfigProvider } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';
import { type PropsWithChildren } from 'react';

export const LayoutProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ConfigProvider theme={{ hashed: false, components: {} }}>
      <StyleProvider hashPriority='high'>{children}</StyleProvider>
    </ConfigProvider>
  );
};
