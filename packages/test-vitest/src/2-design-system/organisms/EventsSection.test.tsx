import React from 'react';
import { test, expect, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { EventsSection } from '@repo/design-system/organisms';
import { EventsDomain } from '../../../../domain-events/src/domain';
import { createBrowserClient } from '@supabase/ssr';

type EventsSectionProps = React.ComponentProps<typeof EventsSection>;

const clearTestingData = async () => {
  screen.queryByTestId('events-section')?.remove();
};

const setup = async ({ ...props }: EventsSectionProps) => {
  const utils = render(<EventsSection {...props} />);
  const eventsSection = screen.queryByTestId('events-section');
  console.log(eventsSection)
  return { utils, eventsSection };
};

test('Skip EventsSection test because of NextJs Router bug with vitest')

// test('Events section renders correctly', async () => {
//   const client = EventsDomain(
//     (() =>
//       createBrowserClient(
//         process.env.NEXT_PUBLIC_SUPABASE_URL ? process.env.NEXT_PUBLIC_SUPABASE_URL : '',
//         process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY : '',
//       ))(),
//   );
//   const events = await client.events().list();
//   const { eventsSection } = await setup({ title: 'Eventos', description: 'Eventos de la semana', events });
//   expect(eventsSection).toBeTruthy();
// });

// afterEach(clearTestingData);
