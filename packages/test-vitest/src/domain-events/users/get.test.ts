import { events } from '@repo/events-domain/events-cli';
import { expect, test } from 'vitest';

test('Should get user', async () => {
  const user = await events.forClientComponent().users().id('1').get();
  expect(user).toBeDefined();
});

test('Should get user by email', async () => {
  const user = await events.forClientComponent().users().email('user1@test.com').get();
  expect(user).toBeDefined();
});

test('Should get user by auth_id', async () => {
  const user = await events.forClientComponent().users().auth_id('1').get();
  expect(user).toBeDefined();
});