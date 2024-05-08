import { Button, Input, Label } from '@repo/design-system/atoms';
import { InputIcon, InputWithLabel } from '@repo/design-system/molecules';
import { EventCard } from '@repo/design-system/molecules';
import { events } from '@repo/events-domain/events-cli';
import { cn } from '@repo/design-system/utils';
import { UserIcon } from '@heroicons/react/16/solid';

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
              img={<UserIcon className={cn('h-40 w-40')} />}
            />
          </div>
        ))}
      </div>
      <Button
        variant='primary'
        className={cn('mt-10 w-40')}
      >
        Click me
      </Button>
      <Input className={cn('mt-10 w-40')} />
      <InputWithLabel
        className={cn('mt-10 w-40')}
        label={'teste'}
      />
      <InputIcon
        className={cn('mt-10 w-40')}
        icon={<UserIcon />}
      />
    </main>
  );
};

export default Home;
