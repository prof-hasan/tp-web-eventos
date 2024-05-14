import { type ReactNode } from 'react';
import { cn } from '../utils';
import { Button } from '../atoms';

type EventCardPros = {
  title: string;
  description: string;
  img: ReactNode;
  onClick?: () => void;
  className?: string;
};

export const EventCard: React.FC<EventCardPros> = ({ className, description, title, img, onClick }) => {
  return (
    <div data-testid='event-card' className={cn('flex flex-col items-center justify-center gap-2 border', className)}>
      {img}
      <h2 className={cn('text-xl font-bold')}>{title}</h2>
      <p className={cn('text-sm')}>{description}</p>
      <Button onClick={onClick}>Saiba mais</Button>
    </div>
  );
};
