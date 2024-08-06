import { ReactHTMLElement, type ReactNode } from 'react';
import { cn } from '../utils';

type LogoProps = {
  className?: string;
  img: ReactNode;
  onClick?: () => void;
};

export const Logo: React.FC<LogoProps> = ({ className, onClick, img }) => {
  return (
    <div
      aria-label='Logo'
      className={cn('flex justify-center py-2', className)}
      data-testid='logo'
      onClick={onClick}
    >
      {img}
    </div>
  );
};
