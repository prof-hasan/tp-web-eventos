'use client';

import { EventsEntity } from '@repo/events-domain/events-types';
import { Button, Image, Typograph } from '@repo/design-system/atoms';
import { UsersEventsEntity } from '@repo/events-domain/users-events-types';

type EventContainerProps = {
  event: EventsEntity;
  userEventsSubscriptions: UsersEventsEntity[];
  subscribeAtEvent: (userSubscription: boolean) => void;
};

export const EventContainer = ({ event, subscribeAtEvent, userEventsSubscriptions }: EventContainerProps) => {

  const userSubscription = userEventsSubscriptions.find((e: UsersEventsEntity) => e.event.id === event.id);
  console.log(userSubscription);

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
        onClick={() => subscribeAtEvent(userSubscription ? true : false)}
        className='w-56'
      >
        {userSubscription ? 'Sair do evento' : 'Inscrever no evento'}
      </Button>
    </div>
  );
};
