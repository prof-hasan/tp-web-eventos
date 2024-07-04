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

test('Should get user', async () => {
  const { client } = setup();
  const user = await client.events().id('1').get();
  expect(user).toBeDefined();
});

test('Should get user by owner id', async () => {
  const { client } = setup();
  const user = await client.events().owner_id('1').get();
  expect(user).toBeDefined();
});

test('Should get user by category', async () => {
  const { client } = setup();
  const user = await client.events().category('music').get();
  expect(user).toBeDefined();
});