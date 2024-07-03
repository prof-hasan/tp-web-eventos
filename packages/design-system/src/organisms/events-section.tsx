import type { EventsEntity } from '@repo/events-domain/events-types';
import { EmblaCarousel } from '../atoms';
import { cn } from '../utils';

type EventsSectionProps = {
  events: EventsEntity[];
  className?: string;
  title: string;
  description: string;
};

export const EventsSection: React.FC<EventsSectionProps> = ({ events, className, title, description }) => {
  return (
    <section className={cn(className, 'bg-white')}>
      <h2 className='text-2xl font-bold text-gray-800'>{title}</h2>
      <p className='text-gray-600'>{description}</p>
      <div>
        <EmblaCarousel slides={events} />
      </div>
    </section>
  );
};
