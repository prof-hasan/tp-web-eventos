import { expect, test } from "vitest";
import { createBrowserClient } from '@supabase/ssr';
import { EventsDomain } from "../../../../domain-events/src/domain";
import { UserUpdateEntity } from "@repo/events-domain/user-types";

const setup = () => {
  const user: UserUpdateEntity = {
    id: '1',
    name: 'User 1 Updated',
  };
  const client = EventsDomain(
    (() =>
      createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL ? process.env.NEXT_PUBLIC_SUPABASE_URL : '',
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY : '',
      ))(),
  );
  return { user, client };
}
test('Should update a user', async () => {
  const { user, client } = setup();
  const result = await client.users().id('1').update(user);
  expect(result).toBeDefined();
});
