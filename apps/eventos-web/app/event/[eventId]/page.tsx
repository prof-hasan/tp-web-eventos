import { auth } from '@repo/auth-domain/auth-cli';
import { events } from '@repo/events-domain/events-cli';
import { EventCard } from '@repo/design-system/molecules';

type Props = {
  params: {
    eventId: string;
  };
};

const EventPage = async ({ params: { eventId: initialEventId } }: Props) => {
  const eventId = decodeURIComponent(initialEventId);
  const event = await events.forServerComponent().events().id(eventId).get();

  return (
    <div>
      <h1>Event Page</h1>
      <EventCard
        event={event}
      />
    </div>
  );
};
export default EventPage;
