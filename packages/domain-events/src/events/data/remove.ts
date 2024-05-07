import { SupabaseClient } from '@supabase/supabase-js';
import { fromModel, toCreate } from '../adapters';
import { EventsModel, EventsEntity as Events } from '../types';

export const remove =
  (supabase: SupabaseClient) =>
  async (id: string): Promise<Events> => {
    const { data, error } = await supabase
      .from('events')
      .update({ deleted_at: new Date().toISOString() })
      .eq('id', id)
      .select(`*, owner: users(*)`);
    if (error) throw error;

    if (!data) throw new Error('No data returned from remove query. A problem occurred.');

    return fromModel(data[0]);
  };
