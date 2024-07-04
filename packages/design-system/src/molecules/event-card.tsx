import { type ReactNode } from 'react';
import { cn } from '../utils';
import { Button, BaseImage as Image } from '../atoms';

type EventCardPros = {
  title: string;
  description: string;
  img?: ReactNode;
  onClick?: () => void;
  className?: string;
};

export const EventCard: React.FC<EventCardPros> = ({ className, description, title, img, onClick }) => {
  return (
    <div
      aria-label='Event Card'
      className={cn('flex h-fit w-52 flex-col items-center justify-center gap-2 border p-1', className)}
      data-testid='event-card'
    >
      <div className='h-fit w-fit'>
        {img ?? (
          <Image
            src='https://placehold.co/150x150'
            alt='uknown'
            unoptimized
          />
        )}
      </div>
      <div className='mt-1 flex flex-col items-center'>
        <h2 className={cn('text-xl font-bold')}>{title}</h2>
        <div className='mt-1 h-9 w-full'>
          <p className={cn('text-sm')}>{description}</p>
        </div>
      </div>
      <Button onClick={onClick}>Saiba mais</Button>
    </div>
  );
};
