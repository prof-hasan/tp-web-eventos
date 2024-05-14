import { test, expect, vi, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from '@repo/design-system/atoms';
import { cn } from '@repo/design-system/utils';

const clearTestingData = async () => {
  screen.getByText('Click me').remove();
};

test('Button renders', () => {
  render(Button({ children: 'Click me' }));
  expect(screen.getByText('Click me')).toBeTruthy();
});

test('Button renders primary style', () => {
  render(Button({ children: 'Click me' }));
  expect(screen.getByText('Click me')).toHaveProperty(
    'className',
    'rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
  );
});

test('Button renders secondary style', () => {
  render(Button({ children: 'Click me', variant: 'secondary' }));
  expect(screen.getByText('Click me')).toHaveProperty(
    'className',
    'rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm bg-white/10 text-white hover:bg-white/20',
  );
});

test('Button renders custom style usign', () => {
  render(Button({ children: 'Click me', variant: 'secondary', className: 'bg-red-600' }));
  expect(screen.getByText('Click me')).toHaveProperty(
    'className',
    // prettier-ignore
    cn(
      'rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold shadow-sm text-white hover:bg-white/20',
      'bg-red-600',
    ),
  );
});

test('Button click event', () => {
  const onClick = vi.fn();
  render(Button({ children: 'Click me', onClick }));
  screen.getByText('Click me').click();
  expect(onClick).toHaveBeenCalled();
});

afterEach(async () => {
  await clearTestingData();
});
