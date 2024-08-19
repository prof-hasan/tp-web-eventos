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

  // map title and descriptions based in categories
  // to do: must call categories from database
  // const categoryMappings: Record<string, { title: string; description: string }> = {
  //   'movies': { title: 'Cinema', description: 'Explore os principais filmes em cartaz' },
  //   'music': { title: 'Música', description: 'Descubra os melhores shows e festivais de música' },
  //   'theater': { title: 'Teatro', description: 'Fique por dentro do principais espetáculos em exibição' },
  //   // Add new events here
  //   'default': { title: 'Outros Eventos', description: 'Veja outros eventos disponíveis.' }
  // };

  const categories:EventsCategoryEntity[] = await events.forServerComponent().category().list();
  // console.log(categoryMappings);

  return (
    <>
      {Object.keys(eventsByCategory).map((category_id) => {
        const { title, description } = categories.find((category) => category.id === category_id) ?? {title:'default', description:'default'};

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
