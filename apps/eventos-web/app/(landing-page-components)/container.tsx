import { EventsSection } from '@repo/design-system/organisms';
import { events } from '@repo/events-domain/events-cli';
import { EventsEntity } from '@repo/events-domain/events-types';
import { EventsCategoryEntity } from '../../../../packages/domain-events/src/category';

export const LandingPageContainer = async () => {
  const eventsObj: EventsEntity[] = await events.forServerComponent().events().list();
  const categories: EventsCategoryEntity[] = await events.forServerComponent().category().list();

  const eventsByCategory: { [category_id: string]: EventsEntity[] } = {};
  categories.forEach((category) => {
    eventsByCategory[category.id] = eventsObj.filter((event) => event.category.id === category.id);
  });

  return (
    <>
      {Object.keys(eventsByCategory).map((category_id) => {
        const { title, description } = categories.find((category) => category.id === category_id) ?? {
          title: 'Default',
          description: 'Default',
        };
        return (
          <EventsSection
            key={category_id}
            title={title}
            description={description}
            events={eventsByCategory[category_id]}
          />
        );
      })}
    </>
  );
};
