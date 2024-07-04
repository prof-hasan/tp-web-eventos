import { expect, test } from 'vitest';
import { EventsCreateEntity } from '@repo/events-domain/events-types';
import { createBrowserClient } from '@supabase/ssr';
import { EventsDomain } from '../../../../domain-events/src/domain';

const setup = () => {
  const event1: EventsCreateEntity = {
    id: '1',
    name: 'Event Name',
    description: 'Event Description',
    country: 'Event Country',
    state: 'Event State',
    city: 'Event City',
    address: 'Event Address',
    category: {id: 'music'},
    date: new Date().getUTCFullYear() + '-' + new Date().getUTCMonth() + '-' + new Date().getUTCDate(),
    time: new Date().getUTCHours() + ':' + new Date().getUTCMinutes() + ':' + new Date().getUTCSeconds(),
    owner: {
      id: '1',
    },
  };

  const event2: EventsCreateEntity = {
    id: '2',
    name: 'Event Name 2',
    description: 'Event Description 2',
    country: 'Event Country 2',
    state: 'Event State 2',
    city: 'Event City 2',
    address: 'Event Address 2',
    category: {id: 'theater'},
    date: new Date().getUTCFullYear() + '-' + new Date().getUTCMonth() + '-' + new Date().getUTCDate(),
    time: new Date().getUTCHours() + ':' + new Date().getUTCMinutes() + ':' + new Date().getUTCSeconds(),
    owner: {
      id: '1',
    },
  };

  const event3: EventsCreateEntity = {
    id: '3',
    name: 'Event Name 3',
    description: 'Event Description 3',
    country: 'Event Country 3',
    state: 'Event State 3',
    city: 'Event City 3',
    address: 'Event Address 3',
    category: {id: 'movies'},
    date: new Date().getUTCFullYear() + '-' + new Date().getUTCMonth() + '-' + new Date().getUTCDate(),
    time: new Date().getUTCHours() + ':' + new Date().getUTCMinutes() + ':' + new Date().getUTCSeconds(),
    owner: {
      id: '1',
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
  const result = await client.events().create(event1);
  expect(result).toBeDefined();
});

test('Should bulk create events', async () => {
  const { client, event2, event3 } = setup();
  const result = await client.events().bulkCreate([event2, event3]);
  expect(result).toBeDefined();
});