import { type SupabaseClient } from '@supabase/supabase-js';
import { fromModel } from '../adapters';
import { type EventsModel, type EventsEntity as Events } from '../types';

export const remove =
  (supabase: SupabaseClient) =>
  async (id: string): Promise<Events> => {
    const { data, error } = await supabase
      .from('events')
      .update({ deleted_at: new Date().toISOString() })
      .eq('id', id)
      .select(`*, owner: users!fk_user_id(*)`);
    if (error) throw error;

    return fromModel(data[0] as EventsModel);
  };
