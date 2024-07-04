import { expect, test } from 'vitest';
import { EventsCreateEntity } from '@repo/events-domain/events-types';
import { createBrowserClient } from '@supabase/ssr';
import { EventsDomain } from '../../../../domain-events/src/domain';
import { UsersEventsCreateEntity } from '@repo/events-domain/users-events-types';

const setup = () => {
  const event1: UsersEventsCreateEntity = {
    user: {
      id: '2',
    },
    event: {
      id: '1',
    },
  };

  const event2: UsersEventsCreateEntity = {
    user: {
      id: '3',
    },
    event: {
      id: '1',
    },
  };

  const event3: UsersEventsCreateEntity = {
    user: {
      id: '2',
    },
    event: {
      id: '2',
    },
  };

  const client = EventsDomain(
    (() =>
      createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL ? process.env.NEXT_PUBLIC_SUPABASE_URL : '',
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY : '',
      ))(),
  );

  return {
    event1,
    event2,
    event3,
    client
  };
};

test('Should create an event', async () => {
  const { client, event1 } = setup();
  const result = await client.users_events().create(event1);
  expect(result).toBeDefined();
});

test('Should bulk create events', async () => {
  const { client, event2, event3 } = setup();
  const result = await client.users_events().bulkCreate([event2, event3]);
  expect(result).toBeDefined();
});