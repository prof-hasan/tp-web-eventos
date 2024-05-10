import { EventCard } from '@repo/design-system/molecules';
import { events } from '@repo/events-domain/events-cli';
import { IconJarLogoIcon } from '@radix-ui/react-icons';

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
        title={event.name}
        description={event.description}
        img={event.img || <IconJarLogoIcon />}
      />
    </div>
  );
};
export default EventPage;
