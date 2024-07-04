import { expect, test } from 'vitest';
import { createBrowserClient } from '@supabase/ssr';
import { EventsDomain } from '../../../../domain-events/src/domain';

const setup = () => {
  const client = EventsDomain(
    (() =>
      createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL ? process.env.NEXT_PUBLIC_SUPABASE_URL : '',
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY : '',
      ))(),
  );
  return { client };
}

test('Should get event', async () => {
  const { client } = setup();
  const event = await client.events().id('1').get();
  expect(event).toBeDefined();
});

test('Should get event by owner id', async () => {
  const { client } = setup();
  const event = await client.events().owner_id('1').get();
  expect(event).toBeDefined();
});

test('Should get event by category', async () => {
  const { client } = setup();
  const event = await client.events().category('music').get();
  expect(event).toBeDefined();
});