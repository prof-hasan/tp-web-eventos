import { Button } from '@repo/design-system/atoms';
import { events } from '@repo/events-domain/events-cli';
import { cn } from '@repo/design-system/utils';

const Home = async () => {
  const eventsList = await events.forServerAction().events().list();

  return (
    <main>
      {eventsList.map((event: any) => (
        <div key={event.id}>
          <h2>{event.name}</h2>
          <p>{event.description}</p>
        </div>
      ))}
      <Button type='link' className={cn('h-full w-full border border-red-600 bg-red-600 p-3 text-white')}>
        Click me
      </Button>
    </main>
  );
};

export default Home;
