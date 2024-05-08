import { cloneElement, type ComponentProps, type ReactNode } from 'react';
import { Input, InputRef as BaseInputRef } from '../atoms';
import { cn } from '../utils';

type InputIconProps = ComponentProps<'input'> & {
  icon: ReactNode;
  inputRef?: boolean;
  className?: string;
  customStyle?: {
    div?: string;
    input?: string;
  };
};

export const InputIcon: React.FC<InputIconProps> = ({
  icon: Icon,
  inputRef = false,
  className = '',
  customStyle = {
    div: '',
    input: '',
  },
  ...props
}) => {
  return (
    <div className={cn(className ? className : customStyle.div)}>
      <div className='relative w-full'>
        <div className='pointer-events-none absolute inset-y-0 start-0 flex items-center ps-2'>
          {Icon &&
            //@ts-expect-error -- its beeign ignored to not throw erros
            cloneElement(Icon, {
              'aria-hidden': 'true',
              // @ts-expect-error -- its beeign ignored to not throw erros
              // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- its beeign ignored to not throw erros
              className: cn('h-5 w-5 text-gray-400', Icon.props.className as string),
            })}
        </div>
        {inputRef ? (
          <BaseInputRef
            className={cn('ps-8', customStyle.input)}
            ref={props.ref}
            {...props}
          />
        ) : (
          <Input
            className={cn('ps-8', customStyle.input)}
            {...props}
          />
        )}
      </div>
    </div>
  );
};
