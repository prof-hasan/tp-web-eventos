import { Button } from '@repo/design-system/atoms';
import { EventCard } from '@repo/design-system/molecules';
import { events } from '@repo/events-domain/events-cli';
import { cn } from '@repo/design-system/utils';

const Home = async () => {
  const eventsList = await events.forServerAction().events().list();

  return (
    <main>
      <div className={cn('flex flex-row gap-2 p-2')}>
        {eventsList.map((event: any) => (
          <div key={event.id}>
          
            <EventCard
              title={event.name}
              description={event.description}
            />
          </div>
        ))}
      </div>
      <Button type='link' className={cn('h-full w-full border border-red-600 bg-red-600 p-3 text-white')}>
        Click me
      </Button>
    </main>
  );
};

export default Home;
