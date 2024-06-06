import { events } from '@repo/events-domain/events-cli';
import { UserCreateEntity } from '@repo/events-domain/user-types';
import { expect, test } from 'vitest';

const setup = () => {
  const user1: UserCreateEntity = {
    id: '1',
    externalAuthId: '1',
    name: 'User 1',
    email: 'user1@test.com',
    role: {
      id: 'user',
      name: 'User',
    },
  };
  const user2: UserCreateEntity = {
    id: '2',
    externalAuthId: '2',
    name: 'User 2',
    email: 'user2@test.com',
    role: {
      id: 'user',
      name: 'User',
    },
  };
  const user3: UserCreateEntity = {
    id: '3',
    externalAuthId: '3',
    name: 'User 3',
    email: 'user3@test.com',
    role: {
      id: 'user',
      name: 'User',
    },
  };
  return { user1, user2, user3 };
};

test('Should create a user', async () => {
  const { user1 } = setup();
  const result = await events.forClientComponent().users().create(user1);
  expect(result).toBeDefined();
});

test('Should create multiple users', async () => {
  const { user2, user3 } = setup();
  const result = await events.forClientComponent().users().bulkCreate([user2, user3]);
  expect(result).toBeDefined();
});
