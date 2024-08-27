import { Typograph } from '@repo/design-system/atoms';
import { EventCard } from '@repo/design-system/molecules';
import { EventsEntity } from '@repo/events-domain/events-types';

type MyEventsProps = {
  events: EventsEntity[] | null;
};

export const MyEvents = ({ events }: MyEventsProps) => {
  return (
    <>
      {events && events.length > 0 && (
        <div className='flex h-fit w-2/3 flex-col items-center justify-center'>
          <Typograph variant='h2'>Meus eventos</Typograph>
          <div className='flex h-full w-full flex-row flex-wrap items-center justify-center gap-4'>
            {events?.map((event) => (
              <EventCard
                key={event.id}
                event={event}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
