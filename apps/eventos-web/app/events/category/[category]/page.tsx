import { events } from '@repo/events-domain/events-cli';
import { EventCard } from '@repo/design-system/molecules';
import { EventsEntity } from '@repo/events-domain/events-types';
import { EventsCategoryContainer } from '../../(components)/events-category-container';

type Props = {
  params: {
    category: string;
  };
};

const EventPage = async ({ params: { category: categoryId } }: Props) => {
  const _categoryId = decodeURIComponent(categoryId);
  const { id: category, description } = await events.forServerComponent().category().id(_categoryId).get();
  const eventsObjs: EventsEntity[] = await events.forServerComponent().events().category(category).get();

  return (
    <div>
      <EventsCategoryContainer
        category={category}
        description={description ?? 'Eventos'}
        events={eventsObjs}
      />
    </div>
  );
};
export default EventPage;
