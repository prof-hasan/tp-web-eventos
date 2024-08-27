import type { EventsEntity } from '@repo/events-domain/events-types';
import { EventsCarousel, Article, Typograph } from '../atoms';
import { cn } from '../utils';

type EventsSectionProps = {
  events: EventsEntity[];
  className?: string;
  title: string;
  description: string;
};

export const EventsSection: React.FC<EventsSectionProps> = ({ events, className, title, description }) => {
  return (
    <Article data-testid='events-section'>
      <div className=' flex flex-col items-center justify-center'>
        <Typograph variant='h3'>{title}</Typograph>
        <Typograph variant='h2'>{description}</Typograph>
      </div>
      <div className='mt-6 h-fit w-full'>
        {events.length > 0 ? (
          <EventsCarousel slides={events} />
        ) : (
          <div>
            <Typograph className='flex w-full items-center justify-center'>
              Não há eventos cadastrados nesta categoria!
            </Typograph>
          </div>
        )}
      </div>
    </Article>
  );
};
