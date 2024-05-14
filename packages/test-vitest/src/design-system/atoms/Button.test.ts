import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from '@repo/design-system/atoms';

test('Button renders', () => {
  render(Button({ children: 'Click me' }));
  expect(screen.getByText('Click me')).toBeTruthy();
});
