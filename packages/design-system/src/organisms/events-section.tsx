import type { EventsEntity } from '@repo/events-domain/events-types';
import { EventsCarousel } from '../atoms';
import { cn } from '../utils';

type EventsSectionProps = {
  events: EventsEntity[];
  className?: string;
  title: string;
  description: string;
};

// <div
// className={cn('flex flex-col items-center justify-center py-6', className)}
// data-testid='events-section'
// >
// Article

//<h2 className='text-2xl font-bold text-gray-800'>{title}</h2>
{/* <p className='text-gray-600'>{des */} // Typograph


export const EventsSection: React.FC<EventsSectionProps> = ({ events, className, title, description }) => {
  return (
    <div
      className={cn('flex flex-col items-center justify-center py-6', className)}
      data-testid='events-section'
    >
      <div className=' flex flex-col items-center justify-center'>
        <h2 className='text-2xl font-bold text-gray-800'>{title}</h2>
        <p className='text-gray-600'>{description}</p>
      </div>
      <div className='mt-6 h-fit w-full'>
        <EventsCarousel slides={events} />
      </div>
    </div>
  );
};
