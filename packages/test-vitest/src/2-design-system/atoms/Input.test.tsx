import React from 'react';
import { test, expect, vi, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { cn } from '@repo/design-system/utils';
import { Input } from '@repo/design-system/atoms';

type InputProps = React.ComponentProps<typeof Input>;

const clearTestingData = async () => {
  screen.queryByTestId('input')?.remove();
};

const setup = ({ ...props }: InputProps) => {
  const utils = render(
    <Input
      placeholder='Test input'
      {...props}
    />,
  );
  const input = screen.queryByTestId('input') as HTMLInputElement;
  return { utils, input };
};

test('Input renders', () => {
  const { input } = setup({});
  expect(input).toBeTruthy();
});

test('Input renders custom style', () => {
  const { input } = setup({ className: 'bg-red-600' });
  expect(input).toHaveProperty(
    'className',
    // prettier-ignore
    cn(
      'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 hover:ring-2 hover:ring-indigo-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
      'bg-red-600',
    ),
  );
});

test('Input change event', () => {
  const handleChange = vi.fn();
  const { input } = setup({ onChange: handleChange });
  fireEvent.change(input, { target: { value: 'Hello' } });
  expect(handleChange).toHaveBeenCalled();
  expect(input.value).toBe('Hello');
});

afterEach(async () => {
  await clearTestingData();
});
