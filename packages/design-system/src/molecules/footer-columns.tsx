import { type ComponentProps } from 'react';
import { Column } from '../atoms';
import { cn } from '../utils';

type FooterColumnsProps = ComponentProps<'input'> & {
  className?: string;
};

export const FooterColumns: React.FC<FooterColumnsProps> = ({ className = '' }) => {
  return (
    <div className={cn('grid grid-cols-4 place-content-between', className)}>
      <Column />
      <Column />
      <Column />
      <Column />
    </div>
  );
};
