import React, { type ComponentProps, forwardRef } from 'react';
import { cn } from '../utils';

type InputProps = ComponentProps<'input'>;

const baseInputStyle = cn(`
    block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1
    ring-inset ring-gray-400 placeholder:text-gray-400 hover:ring-2 hover:ring-indigo-600 focus:ring-2 
    focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
  `);

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      aria-label='Input'
      className={cn(baseInputStyle, className)}
      data-testid='input'
      ref={ref ? ref : null}
      type={type ? type : 'text'}
      {...props}
    />
  );
});
Input.displayName = 'Input';
