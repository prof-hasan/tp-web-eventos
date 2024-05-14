import React from 'react';
import { test, expect, vi, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { cn } from '@repo/design-system/utils';
import { Button } from '@repo/design-system/atoms';

type ButtonProps = React.ComponentProps<typeof Button>;

const clearTestingData = async () => {
  screen.getByText('Click me').remove();
};

const setup = ({ ...props }: ButtonProps) => {
  const utils = render(<Button {...props}>Click me</Button>);
  const button = screen.getByText('Click me') as HTMLButtonElement;
  return { utils, button };
};

test('Button renders', () => {
  const { button } = setup({});
  expect(button).toBeTruthy();
});

test('Button renders primary style', () => {
  const { button } = setup({});
  expect(button).toHaveProperty(
    'className',
    'rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
  );
});

test('Button renders secondary style', () => {
  const { button } = setup({ variant: 'secondary' });
  expect(button).toHaveProperty(
    'className',
    'rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm bg-white/10 text-white hover:bg-white/20',
  );
});

test('Button renders custom style usign', () => {
  const { button } = setup({ variant: 'secondary', className: 'bg-red-600' });
  expect(button).toHaveProperty(
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
  const { button } = setup({ onClick });
  button.click();
  expect(onClick).toHaveBeenCalled();
});

afterEach(async () => {
  await clearTestingData();
});
