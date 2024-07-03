import { auth } from '@repo/auth-domain/auth-cli';
import { events } from '@repo/events-domain/events-cli';
import { Button } from '@repo/design-system/atoms';
import { EventCard } from '@repo/design-system/molecules';
import { IconJarLogoIcon } from '@radix-ui/react-icons';

type Props = {
  params: {
    eventId: string;
  };
};

const EventPage = async ({ params: { eventId: initialEventId } }: Props) => {
  const { id: authId } = await auth.forServerComponent().auth().user().get();
  const user = await events.forServerComponent().users().auth_id(authId).get();

  const eventId = decodeURIComponent(initialEventId);
  const event = await events.forServerComponent().events().id(eventId).get();

  return (
    <div>
      <h1>Event Page</h1>
      <EventCard
        title={event.name}
        description={event.description}
        img={event.img ?? <IconJarLogoIcon />}
      />
    </div>
  );
};
export default EventPage;
