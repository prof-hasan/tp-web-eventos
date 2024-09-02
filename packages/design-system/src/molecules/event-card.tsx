'use client';

import { useRouter } from 'next/navigation';
import { cn } from '../utils';
import { Button, Image } from '../atoms';
import { EventsEntity } from '../../../domain-events/src/events/types/events-entity';

type EventCardPros = {
  event: EventsEntity;
  className?: string;
};

export const EventCard: React.FC<EventCardPros> = ({ className, event }) => {
  const router = useRouter();

  const onClickSaibaMais = (id: string) => {
    router.push(`/event/${id}`);
  };

  return (
    <div
      aria-label='Event Card'
      className={cn('flex h-fit w-52 flex-col items-center justify-center gap-2 border p-1', className)}
      data-testid='event-card'
    >
      <div className='h-fit w-fit'>
        <Image
          src='https://placehold.co/150x150'
          alt='uknown'
          unoptimized
        />
      </div>
      <div className='mt-1 flex flex-col items-center'>
        <h2 className={cn('text-xl font-bold')}>{event.name}</h2>
        <div className='mt-1 h-9 w-full'>
          <p className={cn('text-sm')}>{event.description}</p>
        </div>
      </div>
      <Button onClick={() => onClickSaibaMais(encodeURIComponent(event.id ?? ''))}>Saiba mais</Button>
    </div>
  );
};
