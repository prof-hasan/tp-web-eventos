import { auth } from '@repo/auth-domain/auth-cli';
import { events } from '@repo/events-domain/events-cli';
import { EventCard } from '@repo/design-system/molecules';
import { EventContainer } from './(components)/event-container';

type Props = {
  params: {
    eventId: string;
  };
};

const EventPage = async ({ params: { eventId: initialEventId } }: Props) => {
  const eventId = decodeURIComponent(initialEventId);
  const event = await events.forServerComponent().events().id(eventId).get();

  return (
    <>
      <EventContainer event={event} />
    </>
  );
};
export default EventPage;
