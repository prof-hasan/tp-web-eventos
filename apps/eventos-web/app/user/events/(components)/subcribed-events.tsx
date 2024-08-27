import { Typograph } from '@repo/design-system/atoms';
import { EventCard } from '@repo/design-system/molecules';
import { UsersEventsEntity } from '@repo/events-domain/users-events-types';

type SubscribedEventsProps = {
  userEvents: UsersEventsEntity[] | null;
};

export const SubcribedEvents = ({ userEvents }: SubscribedEventsProps) => {
  console.log('Subscribe:', userEvents);
  return (
    <>
      {userEvents && userEvents.length > 0 && (
        <div className='flex h-fit w-2/3 flex-col items-center justify-center'>
          <Typograph variant='h2'>Eventos inscritos</Typograph>
          <div className='flex h-full w-full flex-row flex-wrap items-center justify-center gap-4'>
            {userEvents?.map((userEvent) => (
              <EventCard
                key={userEvent.event.id}
                event={userEvent.event}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
