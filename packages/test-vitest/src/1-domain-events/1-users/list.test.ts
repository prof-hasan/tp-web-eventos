import { expect, test } from "vitest";
import { createBrowserClient } from '@supabase/ssr';
import { EventsDomain } from "../../../../domain-events/src/domain";

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

test('Should list users', async () => {
  const { client } = setup();
  const users = await client.users().list();
  expect(users).toBeDefined();
});