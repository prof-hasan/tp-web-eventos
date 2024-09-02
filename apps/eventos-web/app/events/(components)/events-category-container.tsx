import { Typograph } from '@repo/design-system/atoms';
import { EventCard } from '@repo/design-system/molecules';
import { EventsEntity } from '@repo/events-domain/events-types';

type EventsCategoryContainerProps = {
  category: string;
  description: string;
  events: EventsEntity[];
};

export const EventsCategoryContainer = ({ category, description, events }: EventsCategoryContainerProps) => {
  return (
    <div className='h-full w-full'>
      <div className=' flex flex-col items-center justify-center'>
        <Typograph variant='h3'>{category}</Typograph>
        <Typograph variant='h2'>{description}</Typograph>
      </div>
      <div className='max-w-1/2 mt-3 flex min-w-fit flex-row flex-wrap items-center justify-center gap-10'>
        {events.map((event) => (
          <div key={event.id}>
            <EventCard event={event} />
          </div>
        ))}
      </div>
    </div>
  );
};
