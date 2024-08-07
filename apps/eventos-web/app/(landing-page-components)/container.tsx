import { EventsSection } from '@repo/design-system/organisms';
import { events } from '@repo/events-domain/events-cli';
import { EventsEntity } from '@repo/events-domain/events-types';

export const LandingPageContainer = async () => {
  const eventsObj = await events.forServerComponent().events().list();

  // to do: split eventsObj per category
  return (
      {
      eventsObj.map((event,index) => {
        return <EventsSection
        title='Eventos'
        description='App to manage events.'
        events={event}
        key={index}
      />
      })
    }
  );
};
