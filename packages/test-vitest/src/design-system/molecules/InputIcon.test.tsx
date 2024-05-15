import React from 'react';
import { test, expect, vi, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { InputIcon } from '@repo/design-system/molecules';

type InputIconProps = React.ComponentProps<typeof InputIcon>;

const clearTestingData = async () => {
  screen.getByTestId('input-icon').remove();
};

const setup = ({ icon, ...props }: InputIconProps) => {
  const utils = render(
    <InputIcon
      icon={icon}
      placeholder='Test Input'
      {...props}
    />,
  );
  const inputIcon = screen.getByTestId('input-icon');
  const input = screen.getByTestId('input');
  return { utils, inputIcon, input };
};

test('InputIcon renders correctly', async () => {
  const { inputIcon } = setup({
    icon: <div> Icon </div>,
  });
  expect(inputIcon).toBeTruthy();
});

test('InputIcon on change', async () => {
  const handleChange = vi.fn();
  const { inputIcon, input } = setup({ icon: <div> Icon </div>, onChange: handleChange });
  fireEvent.change(input, { target: { value: 'Hello' } });
  expect(handleChange).toHaveBeenCalled();
  expect(input.value).toBe('Hello');
});

afterEach(clearTestingData);
