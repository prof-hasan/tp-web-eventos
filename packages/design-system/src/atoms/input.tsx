import { cn } from '../utils';
import { Label } from './label';
import { Image } from './image';
import React from 'react';

interface InputProps extends React.ComponentProps<'input'> {
  children?: React.ReactNode;
  className?: string;
}

interface InputWithLabelProps extends React.ComponentProps<'input'> {
  label: React.ReactNode;
  input: React.ReactNode;
  className?: string;
}

interface InputIconProps extends InputProps {
  icon: React.ReactNode;
  className?: string;
}

const baseInputStyle = cn(`
    block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1
    ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
    sm:text-sm sm:leading-6
  `);

// const

export const Input: React.FC<InputProps> = ({ children, className = '', ...props }) => {
  return (
    <input
      className={cn(baseInputStyle, className)}
      {...props}
    />
  );
};

export const InputIcon: React.FC<InputIconProps> = ({ icon, className = '', ...props }) => {
  return (
    <div className={cn(className)}>
      <div className='relative w-full'>
        <div className='pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3'>
          {icon &&
          //@ts-ignore -- its beeign ignored to not throw erros
            React.cloneElement(icon, {
              className: 'h-5 w-5 text-gray-400',
              ariaHidden: 'true',
            })}
        </div>
        <Input
          className={cn('p-2.5 ps-10')}
          {...props}
        />
      </div>
    </div>
  );
};

export const InputWithLabel: React.FC<InputWithLabelProps> = ({ input, className = '', label, ...props }) => {
  return (
    <div className={cn(className)}>
      {label}
      {input}
    </div>
  );
};
