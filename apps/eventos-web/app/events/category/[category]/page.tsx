import { events } from '@repo/events-domain/events-cli';
import { EventCard } from '@repo/design-system/molecules';
import { EventsEntity } from '@repo/events-domain/events-types';

type Props = {
  params: {
    category: string;
  };
};

const EventPage = async ({ params: { category: categoryId } }: Props) => {
  const category = decodeURIComponent(categoryId);
  const eventsObjs: EventsEntity[] = await events.forServerComponent().events().category(category).get();

  return (
    <div>
      <h1>Event Page</h1>
      {eventsObjs.map((event) => (
        <EventCard
          event={event}
        />
      ))}
    </div>
  );
};
export default EventPage;
