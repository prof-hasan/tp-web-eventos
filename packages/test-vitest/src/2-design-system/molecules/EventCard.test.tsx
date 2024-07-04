import React from 'react';
import { test, expect, vi, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { EventCard } from '@repo/design-system/molecules';
import { EventsDomain } from '../../../../domain-events/src/domain';
import { createBrowserClient } from '@supabase/ssr';

type EventCardProps = React.ComponentProps<typeof EventCard>;

const clearTestingData = async () => {
  screen.queryByTestId('event-card')?.remove();
};

const setup = ({ ...props }: Omit<EventCardProps, 'img'>) => {
  const utils = render(<EventCard {...props} />);
  const eventCard = screen.queryByTestId('event-card') as HTMLDivElement;
  const button = screen.queryByTestId('button') as HTMLButtonElement;
  return { utils, eventCard, button };
};

test('Skip EventCard test because of NextJs Router bug with vitest')

// test('EventCard renders correctly', async () => {
//   const client = EventsDomain(
//     (() =>
//       createBrowserClient(
//         process.env.NEXT_PUBLIC_SUPABASE_URL ? process.env.NEXT_PUBLIC_SUPABASE_URL : '',
//         process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY : '',
//       ))(),
//   );
//   const event = await client.events().id('1').get();
//   const { eventCard } = setup({
//     event,
//   });
//   expect(eventCard).toBeTruthy();
// });

// test('EventCard button click', async () => {
//   const onClick = vi.fn();
//   const client = EventsDomain(
//     (() =>
//       createBrowserClient(
//         process.env.NEXT_PUBLIC_SUPABASE_URL ? process.env.NEXT_PUBLIC_SUPABASE_URL : '',
//         process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY : '',
//       ))(),
//   );
//   const event = await client.events().id('1').get();
//   const { eventCard, button } = setup({
//     event,
//   });
//   fireEvent.click(button);
//   expect(onClick).toHaveBeenCalled();
// });

// afterEach(clearTestingData);
