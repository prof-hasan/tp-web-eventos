'use client';

import { EventsEntity } from '@repo/events-domain/events-types';
import { Button, Image, Typograph } from '@repo/design-system/atoms';

type EventContainerProps = {
  event: EventsEntity;
};

export const EventContainer = ({ event }: EventContainerProps) => {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center gap-10 p-2'>
      <Image
        src={'https://placehold.co/300x300/png'}
        width={300}
        height={300}
        alt={event.name}
        unoptimized
      />
      <div className='flex flex-col gap-1'>
        <Typograph variant='h2'>{event.name}</Typograph>
        <Typograph>Description: {event.description}</Typograph>
        <Typograph>Date: {event.date.toString()}</Typograph>
        <Typograph>
          Location: {event.country}, {event.city}
        </Typograph>
        <Typograph>Address: {event.address}</Typograph>
      </div>
      <Button
        variant='primary'
        onClick={() => alert('Buy ticket')}
        className='w-56'
      >
        Inscrever no evento
      </Button>
    </div>
  );
};
