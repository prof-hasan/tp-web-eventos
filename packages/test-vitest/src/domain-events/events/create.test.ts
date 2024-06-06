import { EventsCreateEntity } from '@repo/events-domain/events-types';
import { events } from '@repo/events-domain/events-cli';
import { expect, test } from 'vitest';

const setup = () => {
  const event: EventsCreateEntity = {
    name: 'Event Name',
    description: 'Event Description',
    country: 'Event Country',
    state: 'Event State',
    city: 'Event City',
    address: 'Event Address',
    date: new Date(),
    time: new Date(),
    owner: {
      id: '1',
    },
  };

  return {
    event,
  };
};

test('should create an event', async () => {
  const { event } = setup();
  const result = await events.forServerComponent().events().create(event);
  expect(result).toBeDefined();
});
