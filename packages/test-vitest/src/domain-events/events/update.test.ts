import { expect, test } from "vitest";
import { createBrowserClient } from '@supabase/ssr';
import { EventsDomain } from "../../../../domain-events/src/domain";
import { EventsUpdateEntity } from "@repo/events-domain/events-types";

const setup = () => {
  const event: EventsUpdateEntity = {
    id: '1',
    name: 'Event 1 Updated',
    description: 'Event 1 Description Updated',
  };
  const client = EventsDomain(
    (() =>
      createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL ? process.env.NEXT_PUBLIC_SUPABASE_URL : '',
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY : '',
      ))(),
  );
  return { event, client };
}
test('Should update a user', async () => {
  const { event, client } = setup();
  const result = await client.events().id('1').update(event);
  expect(result).toBeDefined();
});
