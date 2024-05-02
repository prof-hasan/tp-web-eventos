import { type SupabaseClient } from '@supabase/supabase-js';
import * as Events from './events';
// import * as User from './user';

export const EventsDomain = (supabase: SupabaseClient) => ({
  events: () => ({
    list: Events.list(supabase),
  }),
});
