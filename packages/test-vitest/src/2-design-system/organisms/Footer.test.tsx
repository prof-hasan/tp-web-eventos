import React from 'react';
import { test, expect, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from '@repo/design-system/organisms';

type FooterProps = React.ComponentProps<typeof Footer>;

const clearTestingData = async () => {
  screen.queryByTestId('footer')?.remove();
};

const setup = ({ ...props }: Omit<FooterProps, 'children'>) => {
  const utils = render(<Footer {...props} />);
  const footer = screen.queryByTestId('footer');
  return { utils, footer };
};

test('Footer renders correctly', async () => {
  const { footer } = setup({});
  expect(footer).toBeTruthy();
});

afterEach(clearTestingData);
