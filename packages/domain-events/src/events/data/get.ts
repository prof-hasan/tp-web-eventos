import { SupabaseClient } from '@supabase/supabase-js';
import { fromModel, toCreate } from '../adapters';
import { EventsModel, EventsEntity as Events } from '../types';

export const getById =
  (supabase: SupabaseClient) =>
  async (id: string): Promise<Events> => {
    const { data, error } = await supabase
      .from('events')
      .select(`*, owner: users(*)`)
      .eq('id', id)
      .is('deleted_at', null);
    if (error) throw error;

    if (!data) throw new Error('No data returned from get by id query. A problem occurred.');

    return fromModel(data[0]);
  };

export const getByOwnerId =
  (supabase: SupabaseClient) =>
  async (owner_id: string): Promise<Events[]> => {
    const { data, error } = await supabase
      .from('events')
      .select(`*, owner: users(*)`)
      .eq('owner_id', owner_id)
      .is('deleted_at', null);
    if (error) throw error;

    if (!data) throw new Error('No data returned from get by owner_id query. A problem occurred.');

    return data.map((event: EventsModel) => fromModel(event));
  };
