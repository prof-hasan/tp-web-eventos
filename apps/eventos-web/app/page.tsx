import { Button, Input, Select, SelectContent, SelectItem, SelectTrigger } from '@repo/design-system/atoms';
import { InputIcon, InputWithLabel } from '@repo/design-system/molecules';
import { EventCard } from '@repo/design-system/molecules';
import { Header } from '@repo/design-system/organisms';
import { events } from '@repo/events-domain/events-cli';
import { cn } from '@repo/design-system/utils';
import { PersonIcon} from '@radix-ui/react-icons'

const Home = async () => {
  const eventsList = await events.forClientComponent().events().list();
  const userList = await events.forClientComponent().users().list();

  const eventsParticipants: any = {};
  for (const event of eventsList) {
    eventsParticipants[event.id] = await events.forClientComponent().users_events().event_id(event.id).get();
  }

  return (
    <main>
      <Header/>
      <div className={cn('flex flex-row gap-2 p-2')}>
        {eventsList.map((event: any) => (
          <div key={event.id}>
            <EventCard
              title={event.name}
              description={`${event.description} with ${eventsParticipants[event.id].length} participants`}
              img={<PersonIcon className={cn('h-40 w-40')} />}
            />
          </div>
        ))}
      </div>
      <div className={cn('flex flex-row gap-2 p-2')}>
        {userList.map((user: any) => (
          <div key={user.id} className='border p-2'>
            {user.email}
            {' '}
            {user.name}
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
        icon={<PersonIcon />}
      />
      <Select>
        <SelectTrigger
          className={cn('mt-10 w-40')}
          placeholder='Select an option'
        />
        <SelectContent>
          <SelectItem value='Option 1'>Option 1</SelectItem>
          <SelectItem value='Option 2'>Option 2</SelectItem>
          <SelectItem value='Option 3'>Option 3</SelectItem>
        </SelectContent>
      </Select>
    </main>
  );
};

export default Home;
