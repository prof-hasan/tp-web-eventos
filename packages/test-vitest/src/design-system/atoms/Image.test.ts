import { test, expect, vi, afterEach, afterAll } from 'vitest';
import { render, screen } from '@testing-library/react';
import { cn } from '@repo/design-system/utils';
import { Image } from '@repo/design-system/atoms';

const clearTestingData = async () => {
  screen.getByAltText('test-image').remove();
};

test('Image renders', () => {
  render(Image({ alt: 'test-image',src: 'https://via.placeholder.com/150' }));
  expect(screen.getByAltText('test-image')).toBeTruthy();
});

test('Image renders with custom style', () => {
  render(Image({ alt: 'test-image',src: 'https://via.placeholder.com/150', className: 'rounded-lg' }));
  expect(screen.getByAltText('test-image')).toHaveProperty(
    'className',
    'rounded-lg',
  );
});

test('Image renders with custom style using cn', () => {
  render(Image({ alt: 'test-image',src: 'https://via.placeholder.com/150', className: 'rounded-lg border-2'}));
  expect(screen.getByAltText('test-image')).toHaveProperty(
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
