import { type SupabaseClient } from '@supabase/supabase-js';
import { fromModel } from '../adapters';
import { type UsersEventsEntity as UsersEvents } from '../types';

export const list = (supabase: SupabaseClient) => async (): Promise<UsersEvents[]> => {
  const { data, error } = await supabase
    .from('users_events')
    .select(`*, event: events!fk_event_id(*), user: users!fk_user_id(*, role: users_roles(*))`);
  if (error) throw error;

  return data.map(fromModel);
};
