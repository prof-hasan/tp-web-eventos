import { SupabaseClient } from '@supabase/supabase-js';
import { fromModel } from '../adapters';
import { UsersEventsEntity as UsersEvents } from '../types';

export const list = (supabase: SupabaseClient) => async (): Promise<UsersEvents[]> => {
  const { data, error } = await supabase
    .from('users_events')
    .select(`*, event: events(*), user: users(*, role: users_roles(*))`);
  if (error) throw error;

  if (!data) throw new Error('No data returned from select query. A problem occurred.');

  return data.map(fromModel);
};
