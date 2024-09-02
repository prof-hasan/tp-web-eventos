import { type SupabaseClient } from '@supabase/supabase-js';
import { fromModel } from '../adapters';
import { type UsersEventsEntity as UsersEvents } from '../types';

export const getByEventId =
  (supabase: SupabaseClient) =>
  async (eventId: string): Promise<UsersEvents[]> => {
    const { data, error } = await supabase
      .from('users_events')
      .select(`*, event: events!fk_event_id(*), user: users!fk_user_id(*, role: users_roles(*))`)
      .eq('event_id', eventId);
    if (error) throw error;

    return data.map(fromModel);
  };

export const getByUserId =
  (supabase: SupabaseClient) =>
  async (userId: string): Promise<UsersEvents[]> => {
    const { data, error } = await supabase
      .from('users_events')
      .select(`*, event: events!fk_event_id(*), user: users!fk_user_id(*, role: users_roles(*))`)
      .eq('user_id', userId);
    if (error) throw error;

    return data.map(fromModel);
  };
