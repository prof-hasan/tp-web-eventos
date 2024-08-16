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
    <Article
      data-testid='events-section'
    >
      <div className=' flex flex-col items-center justify-center'>
        <Typograph variant='h3'>{title}</Typograph>
        <Typograph variant='h2'>{description}</Typograph>
      </div>
      <div className='mt-6 h-fit w-full'>
        <EventsCarousel slides={events} />
      </div>
    </Article>
  );
};
