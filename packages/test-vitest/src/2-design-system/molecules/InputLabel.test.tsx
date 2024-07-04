import React from 'react';
import { test, expect, vi, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { InputLabel } from '@repo/design-system/molecules';

type InputLabelProps = React.ComponentProps<typeof InputLabel>;

const clearTestingData = async () => {
  screen.queryByTestId('input-label')?.remove();
};

const setup = ({ ...props }: Omit<InputLabelProps, 'children'>) => {
  const utils = render(
    <InputLabel
      placeholder='Test Label'
      {...props}
    />,
  );
  const inputLabel = screen.queryByTestId('input-label') as HTMLLabelElement;
  const input = screen.queryByTestId('input') as HTMLInputElement;
  return { utils, inputLabel, input };
};

test('InputLabel renders correctly', async () => {
  const { inputLabel } = setup({
    label: 'Test Label',
  });
  expect(inputLabel).toBeTruthy();
});

test('InputLabel on change', async () => {
  const handleChange = vi.fn();
  const { inputLabel, input } = setup({ label: 'Test Label', onChange: handleChange });
  fireEvent.change(input, { target: { value: 'Hello' } });
  expect(handleChange).toHaveBeenCalled();
  expect(input.value).toBe('Hello');
});

afterEach(clearTestingData);
