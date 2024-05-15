import React from 'react';
import { test, expect, vi, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { EventCard } from '@repo/design-system/molecules';
import { Image } from '@repo/design-system/atoms';

type EventCardProps = React.ComponentProps<typeof EventCard>;

const clearTestingData = async () => {
  screen.getByTestId('event-card').remove();
};

const setup = ({ ...props }: Omit<EventCardProps, 'img'>) => {
  const utils = render(
    <EventCard
      img={
        <Image
          alt='Test-Image'
          src='https://via.placeholder.com/150'
        />
      }
      {...props}
    />,
  );
  const eventCard = screen.getByTestId('event-card');
  const button = screen.getByTestId('button');
  return { utils, eventCard, button };
};

test('EventCard renders correctly', async () => {
  const { eventCard } = setup({
    title: 'Test Title',
    description: 'Test Description',
  });
  expect(eventCard).toBeTruthy();
});

test('EventCard button click', async () => {
  const onClick = vi.fn();
  const { eventCard, button } = setup({
    title: 'Test Title',
    description: 'Test Description',
    onClick,
  });
  fireEvent.click(button);
  expect(onClick).toHaveBeenCalled();
});

afterEach(clearTestingData);
