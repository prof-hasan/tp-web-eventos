import { type ReactNode } from 'react';
import { cn } from '../utils';
import { Button } from '../atoms';

type EventCardPros = {
  title: string;
  description: string;
  img: ReactNode;
}

export const EventCard: React.FC<EventCardPros> = ({ description, title, img }) => {
  return (
    <div className={cn('flex flex-col items-center justify-center gap-2 border')}>
      {img}
      <h2 className={cn('text-xl font-bold')}>{title}</h2>
      <p className={cn('text-sm')}>{description}</p>
      <Button>Saiba mais</Button>
    </div>
  );
};
