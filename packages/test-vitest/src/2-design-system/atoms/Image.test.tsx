import React from 'react';
import { test, expect, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { cn } from '@repo/design-system/utils';
import { Image } from '@repo/design-system/atoms';

type ImageProps = React.ComponentProps<typeof Image>;

const clearTestingData = async () => {
  screen.queryByTestId('image')?.remove();
};

const setup = ({ ...props }: Omit<ImageProps, 'alt'>) => {
  const utils = render(
    <Image
      alt='test-image'
      {...props}
    />,
  );
  const image = screen.queryByTestId('image') as HTMLImageElement;
  return { utils, image };
};

test('Image renders', () => {
  const { image } = setup({ src: 'https://via.placeholder.com/150' });
  expect(image).toBeDefined();
});

test('Image renders with custom style', () => {
  const { image } = setup({ src: 'https://via.placeholder.com/150', className: 'rounded-lg border-2' });
  expect(image).toHaveProperty(
    'className',
    // prettier-ignore
    cn(
      'rounded-lg',
      'border-2',
    ),
  );
});

afterEach(async () => {
  await clearTestingData();
});
