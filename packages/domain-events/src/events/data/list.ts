import { type SupabaseClient } from '@supabase/supabase-js';
import { fromModel } from '../adapters';
import { type EventsEntity as Events, type EventsModel } from '../types';

export const list = (supabase: SupabaseClient) => async (): Promise<Events[]> => {
  const { data, error } = await supabase.from('events').select(`*, owner: users(*)`).is('deleted_at', null);
  if (error) throw error;

  if (!data) throw new Error('No data returned from list query. A problem occurred.');

  return data.map((event: EventsModel) => fromModel(event));
};
