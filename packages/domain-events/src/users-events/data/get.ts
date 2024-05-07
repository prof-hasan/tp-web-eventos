import { SupabaseClient } from '@supabase/supabase-js';
import { fromModel } from '../adapters';
import { UsersEventsEntity as UsersEvents } from '../types';

export const getByEventId =
  (supabase: SupabaseClient) =>
  async (eventId: string): Promise<UsersEvents[]> => {
    const { data, error } = await supabase
      .from('users_events')
      .select(`*, event: events(*), user: users(*, role: users_roles(*))`)
      .eq('event_id', eventId);
    if (error) throw error;

    if (!data) throw new Error('No data returned from select query. A problem occurred.');

    return data.map(fromModel);
  };

export const getByUserId =
  (supabase: SupabaseClient) =>
  async (userId: string): Promise<UsersEvents[]> => {
    const { data, error } = await supabase
      .from('users_events')
      .select(`*, event: events(*), user: users(*, role: users_roles(*))`)
      .eq('user_id', userId);
    if (error) throw error;

    if (!data) throw new Error('No data returned from select query. A problem occurred.');

    return data.map(fromModel);
  };
