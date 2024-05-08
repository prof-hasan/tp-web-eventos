import { type SupabaseClient } from '@supabase/supabase-js';
import { fromModel } from '../adapters';
import { type UsersEventsModel, type UsersEventsEntity as UsersEvents } from '../types';

export const remove =
  (supabase: SupabaseClient) =>
  async (event_id: string, user_id: string): Promise<UsersEvents> => {
    const { data, error } = await supabase
      .from('users_events')
      .delete()
      .match({ event_id, user_id })
      .select(`*, event: events(*), user: users(*, role: users_roles(*))`);
    if (error) throw error;

    return fromModel(data[0] as UsersEventsModel);
  };