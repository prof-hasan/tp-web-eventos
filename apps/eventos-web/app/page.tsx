import { Button, Input, InputIcon, InputWithLabel, Label } from '@repo/design-system/atoms';
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
            />
          </div>
        ))}
      </div>
      <Button
        variant='primary'
        variantTheme='dark'
      >
        Click me
      </Button>
      <Input className={cn('mt-10 w-40')} />
      <InputWithLabel
        className={cn('mt-10 w-40')}
        label={<Label label='teste' />}
        input={<Input />}
      />
      <InputIcon
        className={cn('mt-10 w-40')}
        icon={<UserIcon />}
      />
    </main>
  );
};

export default Home;
