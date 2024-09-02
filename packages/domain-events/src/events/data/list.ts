import { type SupabaseClient } from '@supabase/supabase-js';
import { fromModel } from '../adapters';
import { type EventsEntity as Events, type EventsModel } from '../types';

export const list = (supabase: SupabaseClient) => async (): Promise<Events[]> => {
  const { data, error } = await supabase
    .from('events')
    .select(`*, owner: users!fk_user_id(*), category: events_categories!fk_category_id(*)`)
    .is('deleted_at', null);
  if (error) throw error;

  return data.map((event: EventsModel) => fromModel(event));
};
