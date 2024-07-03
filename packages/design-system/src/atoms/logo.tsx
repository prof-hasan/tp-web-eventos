import { type ReactNode } from 'react';
import { cn } from '../utils';

type LogoProps = {
  img: ReactNode;
};

export const Logo: React.FC<LogoProps> = ({ img }) => {
  return (
    <div
      aria-label='Logo'
      className={cn('flex justify-center py-2')}
      data-testid='logo'
    >
      {img}
    </div>
  );
};
