import { type ComponentProps } from 'react';
import { cn } from '../utils';

type FooterBottomProps = ComponentProps<'input'> & {
  className?: string;
};

var currentDate = new Date();

export const FooterBottom: React.FC<FooterBottomProps> = ({ className = '' }) => {
  return (
    <div className={cn('grid grid-cols-2 place-content-between', className)}>
      <span>DW &#x40; {currentDate.getFullYear()}</span>
      <span className={cn('flex justify-end')}>
        {currentDate.toLocaleDateString('pt-BR', {
          weekday: 'long',
          month: 'long',
          day: 'numeric'
        })}
      </span>
    </div>
  );
};
