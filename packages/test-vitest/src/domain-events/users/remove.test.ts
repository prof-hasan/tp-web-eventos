import { events } from "@repo/events-domain/events-cli";
import { expect, test } from "vitest";

test('Should soft delete a user', async () => {
  const user = await events.forClientComponent().users().id('3').remove();
  expect(user).toBeDefined();
});