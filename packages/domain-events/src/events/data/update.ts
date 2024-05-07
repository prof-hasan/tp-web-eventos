import { SupabaseClient } from '@supabase/supabase-js';
import { fromModel, toUpdate } from '../adapters';
import { EventsUpdateEntity, EventsUpdateModel, EventsEntity as Events } from '../types';

export const update =
  (supabase: SupabaseClient) =>
  async (id: string, event: EventsUpdateEntity): Promise<Events> => {
    const { data, error } = await supabase
      .from('events')
      .update<EventsUpdateModel>(toUpdate(event))
      .eq('id', id)
      .select(`*, owner: users(*)`);
    if (error) throw error;

    if (!data) throw new Error('No data returned from update query. A problem occurred.');

    return fromModel(data[0]);
  };
