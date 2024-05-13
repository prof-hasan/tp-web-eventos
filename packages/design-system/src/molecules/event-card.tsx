import { type ReactNode } from 'react';
import { cn } from '../utils';
import { Button } from '../atoms';

type EventCardPros = {
  className?:string;
  title: string;
  description: string;
  img: ReactNode;
}

export const EventCard: React.FC<EventCardPros> = ({ className,description, title, img }) => {
  return (
    <div className={cn('flex flex-col items-center justify-center gap-2 border-4 w-48',className)}>
      {img}

      <div className={cn('text-center  text-wrap')}>
        <h2 className={cn('text-xl font-bold')}>{title}</h2>
        <p className={cn('text-sm mx-2 text-ellipsis overflow-hidden max-h-10')}>{description}</p>
      </div>
      <Button className={cn('mb-4')}>Saiba mais</Button>
    </div>
  );
};
