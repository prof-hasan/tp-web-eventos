import { cloneElement, type ComponentProps, type ReactNode } from 'react';
import { cn } from '../utils';

type ColumnProps = ComponentProps<'input'> & {
  className?: string;
  header: string;
  icons: ReactNode[];
  items: Array<string | ReactNode>; // Modificado para aceitar strings e elementos React
};

export const Column: React.FC<ColumnProps> = ({ className = '', header, icons, items }) => {
  return (
    <div
      aria-label='Column'
      className={cn('', className)}
    >
      <h3 className={cn('font-bold')}>{header}</h3>
      {items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
      <div className='flex flex-row gap-2 pt-1 justify-end'>
        {icons.map(
          (icon, index) =>
            icon &&
            //@ts-expect-error -- its beeign ignored to not throw erros
            cloneElement(icon, {
              'aria-hidden': 'true',
              id: index,
              key: index,
              // @ts-expect-error -- its beeign ignored to not throw erros
              // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- its beeign ignored to not throw erros
              className: cn('h-5 w-5 text-gray-400', icon.props.className as string),
            }),
        )}
      </div>
    </div>
  );
};
