import { events } from "@repo/events-domain/events-cli";
import { expect, test } from "vitest";

test('Should list users', async () => {
  const users = await events.forClientComponent().users().list();
  expect(users).toBeDefined();
});