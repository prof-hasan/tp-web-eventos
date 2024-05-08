import React, { type ComponentProps, forwardRef } from 'react';
import { cn } from '../utils';

type InputProps = ComponentProps<'input'>;

const baseInputStyle = cn(`
    block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1
    ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
    sm:text-sm sm:leading-6
  `);

export const Input: React.FC<InputProps> = ({ className = '', ...props }) => {
  return (
    <input
      className={cn(baseInputStyle, className)}
      {...props}
    />
  );
};

export const InputRef = forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref) => {
  return (
    <input
      className={cn(baseInputStyle, props.className)}
      ref={ref}
      {...props}
    />
  );
});
InputRef.displayName = 'InputRef';