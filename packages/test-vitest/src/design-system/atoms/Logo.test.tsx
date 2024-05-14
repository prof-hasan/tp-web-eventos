import React from 'react';
import { test, expect, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { cn } from '@repo/design-system/utils';
import { Logo } from '@repo/design-system/atoms';

type LogoProps = React.ComponentProps<typeof Logo>;

const clearTestingData = async () => {
  screen.getByText('test-logo').remove();
};

const setup = ({ ...props }: LogoProps) => {
  const utils = render(<Logo {...props} />);
  const logo = screen.getByText('test-logo') as HTMLDivElement;
  return { utils, logo };
};

test('Logo renders', () => {
  const { logo } = setup({ img: <div>test-logo</div> });
  expect(logo).toBeTruthy();
});

afterEach(async () => {
  await clearTestingData();
});
