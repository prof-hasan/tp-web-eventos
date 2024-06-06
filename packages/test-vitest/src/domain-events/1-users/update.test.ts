import { events } from "@repo/events-domain/events-cli";
import { expect, test } from "vitest";

test('Should update a user', async () => {
  const user = {
    id: '1',
    name: 'User 1 Updated',
  };
  const result = await events.forClientComponent().users().id('1').update(user);
  expect(result).toBeDefined();
});
