'use client';
// REF: https://www.radix-ui.com/primitives/docs/components/select#installation
import * as PrimitiveSelect from '@radix-ui/react-select';
import { CaretDownIcon, CaretUpIcon } from '@radix-ui/react-icons';
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef, type ReactElement } from 'react';

const Select = PrimitiveSelect.Root;

type SelectTriggerProps = ComponentPropsWithoutRef<typeof PrimitiveSelect.Trigger> & {
  placeholder?: string;
};
const SelectTrigger = forwardRef<ElementRef<typeof PrimitiveSelect.Trigger>, SelectTriggerProps>(
  ({ placeholder, className, ...rest }, forwardedRef) => {
    return (
      <PrimitiveSelect.Trigger
        className={className}
        ref={forwardedRef}
        {...rest}
      >
        <PrimitiveSelect.Value placeholder={placeholder} />
        <PrimitiveSelect.Icon>
          <CaretDownIcon className='rotate-270 stroke-brand' />
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
  ...res
}: SelectContentProps) => {
  return (
    <PrimitiveSelect.Portal>
      <PrimitiveSelect.Content
        align={align}
        alignOffset={alignOffset}
        className={className}
        position={position}
        side={side}
        sideOffset={sideOffset}
        {...res}
      >
        <PrimitiveSelect.ScrollUpButton>
          <CaretUpIcon className='stroke-brand' />
        </PrimitiveSelect.ScrollUpButton>
        <PrimitiveSelect.Viewport className='h-full w-full'>{children}</PrimitiveSelect.Viewport>
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

const SelectItem = forwardRef<ElementRef<typeof PrimitiveSelect.Item>, SelectItemProps>(
  ({ children, indicator, ...res }, forwardedRef) => {
    return (
      <PrimitiveSelect.Item
        ref={forwardedRef}
        {...res}
      >
        <PrimitiveSelect.ItemText>{children}</PrimitiveSelect.ItemText>
        <PrimitiveSelect.ItemIndicator>
          {/** Icon for item indicator */}
          {indicator}
        </PrimitiveSelect.ItemIndicator>
      </PrimitiveSelect.Item>
    );
  },
);
SelectItem.displayName = 'SelectItem';

export { Select, SelectContent, SelectItem, SelectTrigger };
