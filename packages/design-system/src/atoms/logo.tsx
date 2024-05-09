import { type ReactNode } from 'react';
import { cn } from '../utils';

type LogoProps = {
  className?: string;
  img: ReactNode;
};

export const Logo: React.FC<LogoProps> = ({ className = '', img }) => {
  return <div className={cn('flex justify-center py-2')}>{img}</div>;
};
