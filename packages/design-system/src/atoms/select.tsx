'use client';
// REF: https://www.radix-ui.com/primitives/docs/components/select#installation
import * as PrimitiveSelect from '@radix-ui/react-select';
import { CaretDownIcon, CaretUpIcon, CheckIcon } from '@radix-ui/react-icons';
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef, type ReactElement } from 'react';
import { cn } from '../utils';

type SelectProps = ComponentPropsWithoutRef<typeof PrimitiveSelect.Root>;
const Select = ({ children, ...props }: SelectProps) => {
  return <PrimitiveSelect.Root {...props}> {children} </PrimitiveSelect.Root>;
};

type SelectTriggerProps = ComponentPropsWithoutRef<typeof PrimitiveSelect.Trigger> & {
  placeholder?: string;
};
const selectTriggerStyle = cn(
  `
    text-sm inline-block flex w-full flex-row items-center justify-between rounded-md border-0 px-3 py-2 
    text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 hover:ring-2 hover:ring-indigo-600 
    focus:outline-none focus:ring-2 focus:ring-indigo-600
  `,
);
const SelectTrigger = forwardRef<ElementRef<typeof PrimitiveSelect.Trigger>, SelectTriggerProps>(
  ({ placeholder, className, ...props }, forwardedRef) => {
    return (
      <PrimitiveSelect.Trigger
        aria-label='Select Trigger'
        className={cn(selectTriggerStyle, className)}
        ref={forwardedRef}
        {...props}
      >
        <PrimitiveSelect.Value placeholder={placeholder} />
        <PrimitiveSelect.Icon>
          <CaretDownIcon className={cn('rotate-270 stroke-brand')} />
        </PrimitiveSelect.Icon>
      </PrimitiveSelect.Trigger>
    );
  },
);
SelectTrigger.displayName = 'SelectTrigger';

type SelectContentProps = ComponentPropsWithoutRef<typeof PrimitiveSelect.Content>;
const SelectContent = ({
  align = 'center',
  alignOffset = 5,
  children,
  className,
  position = 'popper',
  side = 'bottom',
  sideOffset = 5,
  ...props
}: SelectContentProps) => {
  return (
    <PrimitiveSelect.Portal>
      <PrimitiveSelect.Content
        align={align}
        alignOffset={alignOffset}
        className={cn('overflow-hidden rounded-md bg-gray-50 shadow-xl', className)}
        position={position}
        side={side}
        sideOffset={sideOffset}
        {...props}
      >
        <PrimitiveSelect.ScrollUpButton>
          <CaretUpIcon className='stroke-brand' />
        </PrimitiveSelect.ScrollUpButton>
        <PrimitiveSelect.Viewport className='h-full w-full p-3'>{children}</PrimitiveSelect.Viewport>
        <PrimitiveSelect.ScrollDownButton>
          <CaretDownIcon className='stroke-brand' />
        </PrimitiveSelect.ScrollDownButton>
      </PrimitiveSelect.Content>
    </PrimitiveSelect.Portal>
  );
};

type SelectItemProps = ComponentPropsWithoutRef<typeof PrimitiveSelect.Item> & {
  indicator?: ReactElement;
};
const selectItemStyle = cn(`
    relative flex cursor-pointer select-none items-center justify-center gap-1 rounded-lg p-2
    leading-none data-[disabled]:pointer-events-none data-[disabled]:bg-gray-500 
    data-[highlighted]:bg-indigo-600 data-[selected]:bg-indigo-600 data-[highlighted]:text-white 
    data-[selected]:text-white data-[highlighted]:outline-none
  `);
const SelectItem = forwardRef<ElementRef<typeof PrimitiveSelect.Item>, SelectItemProps>(
  ({ children, indicator, ...props }, forwardedRef) => {
    return (
      <PrimitiveSelect.Item
        className={cn(selectItemStyle)}
        ref={forwardedRef}
        {...props}
      >
        <PrimitiveSelect.ItemText>{children}</PrimitiveSelect.ItemText>
        <PrimitiveSelect.ItemIndicator className={cn('inline-flex w-6 items-center justify-center')}>
          {indicator ? indicator : <CheckIcon />}
        </PrimitiveSelect.ItemIndicator>
      </PrimitiveSelect.Item>
    );
  },
);
SelectItem.displayName = 'SelectItem';

export { Select, SelectContent, SelectItem, SelectTrigger };
