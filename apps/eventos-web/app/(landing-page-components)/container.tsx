import { EventsSection } from '@repo/design-system/organisms';
import { events } from '@repo/events-domain/events-cli';
import { EventsEntity } from '@repo/events-domain/events-types';
import { EventsCategoryEntity } from '../../../../packages/domain-events/src/category';

export const LandingPageContainer = async () => {
  const eventsObj: EventsEntity[] = await events.forServerComponent().events().list();

  // group events by category
  const eventsByCategory: Record<string, EventsEntity[]> = eventsObj.reduce((acc, event) => {
    const category = event.category.toString() || 'Uncategorized';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(event);
    return acc;
  }, {} as Record<string, EventsEntity[]>);

  const categories:EventsCategoryEntity[] = await events.forServerComponent().category().list();

  return (
    <>
      {Object.keys(eventsByCategory).map((category_id) => {
        const { title, description } = Array.isArray(categories) ? categories.find((category) => category.id === category_id) ?? {title:'Default', description:'Default'} : {title:'Outros', description: 'Demais eventos na região'};
        
        // const {title, description} = {title:'default', description:'default'};
        return <EventsSection
          key={category_id}
          title={title}
          description={description}
          events={eventsByCategory[category_id]}
        />
      })}
    </>
  );
};
