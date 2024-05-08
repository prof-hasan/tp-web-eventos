import { type ReactNode } from 'react';
import { cn } from '../utils';

interface EventCardPros {
  title: string;
  description: string;
  img: ReactNode;
}

export const EventCard: React.FC<EventCardPros> = ({  description, title, img }) => {
  return (
    <div>
      <div className={cn('flex flex-col gap-2')}>
        {img}
        <h2 className={cn('text-xl font-bold')}>{title}</h2>
        <p className={cn('text-sm')}>{description}</p>
      </div>
    </div>
  );
};
