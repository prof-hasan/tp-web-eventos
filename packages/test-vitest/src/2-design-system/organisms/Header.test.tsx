import React from 'react';
import { test, expect, vi, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from '@repo/design-system/organisms';

type HeaderProps = React.ComponentProps<typeof Header>;

const clearTestingData = async () => {
  screen.queryByTestId('header')?.remove();
};

// const setup = ({ ...props }: Omit<HeaderProps, 'children'>) => {
//   const utils = render(<Header {...props} />);
//   const header = screen.queryByTestId('header');
//   return { utils, header };
// };

test('Skip EventCard test because of NextJs Router bug with vitest')

// test('Header renders correctly', async () => {
//   const { header } = setup({});
//   expect(header).toBeDefined();
// });

// afterEach(clearTestingData);
