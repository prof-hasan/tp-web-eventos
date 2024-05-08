import { cloneElement, type ComponentProps, type ReactNode } from 'react';
import { Input } from '../atoms';
import { cn } from '../utils';

type InputIconProps = ComponentProps<'input'> & {
  className?: string;
  customStyle?: {
    div?: string;
    input?: string;
  };
  icon: ReactNode;
};

export const InputIcon: React.FC<InputIconProps> = ({
  icon: Icon,
  className = '',
  customStyle = {
    input: '',
  },
  ...props
}) => {
  return (
    <div className={cn(className)}>
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
        <Input
          className={cn('ps-8', customStyle.input)}
          {...props}
        />
      </div>
    </div>
  );
};
