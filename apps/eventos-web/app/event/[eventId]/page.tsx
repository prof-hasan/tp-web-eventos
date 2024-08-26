'use server';

import { events } from '@repo/events-domain/events-cli';
import { EventContainer } from './(components)/event-container';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { UserAuth } from '@repo/auth-domain/types';
import { UserEntity } from '@repo/events-domain/user-types';
import { UsersEventsEntity } from '@repo/events-domain/users-events-types';

type Props = {
  params: {
    eventId: string;
  };
};

const EventPage = async ({ params: { eventId: initialEventId } }: Props) => {
  const eventId = decodeURIComponent(initialEventId);
  const event = await events.forServerComponent().events().id(eventId).get();

  const user: UserAuth | null = JSON.parse(cookies().get('user')?.value ?? 'null');
  const userEntity: UserEntity | null = user ? await events.forServerComponent().users().auth_id(user.id).get() : null;
  const userEventsSubscriptions: UsersEventsEntity[] | null = userEntity
    ? await events.forServerComponent().users_events().user_id(userEntity.id).get()
    : null;

  const hadleSubscribeAtEvent = async (userSubscribed = false) => {
    'use server';
    if (userEntity) {
      if (userSubscribed) {
        await events.forServerComponent().users_events().remove({ event_id: eventId, user_id: userEntity?.id });
        revalidatePath(`/event/${encodeURIComponent(eventId)}`);
        return;
      }
      await events
        .forServerComponent()
        .users_events()
        .create({
          event: { id: eventId },
          user: { id: userEntity?.id },
        });
      revalidatePath(`/event/${encodeURIComponent(eventId)}`);
    }
    redirect('/auth/signin');
  };

  return (
    <>
      <EventContainer
        event={event}
        subscribeAtEvent={hadleSubscribeAtEvent}
        userEventsSubscriptions={userEventsSubscriptions}
      />
    </>
  );
};
export default EventPage;
