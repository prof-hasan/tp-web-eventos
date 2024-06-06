import React from 'react';
import { test, expect, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { cn } from '@repo/design-system/utils';
import { Label } from '@repo/design-system/atoms';

type LabelProps = React.ComponentProps<typeof Label>;

const clearTestingData = async () => {
  screen.getByTestId('label').remove();
};

const setup = ({ ...props }: LabelProps) => {
  const utils = render(<Label {...props} />);
  const label = screen.getByTestId('label');
  return { utils, label };
};

test('Label renders', () => {
  const { label } = setup({ label: 'test-label' });
  expect(label).toBeTruthy();
});

test('Label renders with custom style using cn', () => {
  const { label } = setup({ label: 'test-label', className: 'text-red-600 font-bold' });
  expect(label).toHaveProperty(
    'className',
    // prettier-ignore
    cn('block text-sm font-medium leading-6 text-gray-900', 'text-red-600 font-bold'),
  );
});

afterEach(async () => {
  await clearTestingData();
});
