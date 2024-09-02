import { type SupabaseClient } from '@supabase/supabase-js';
import { fromModel, toUpdate } from '../adapters';
import type { EventsUpdateEntity, EventsUpdateModel, EventsEntity as Events, EventsModel } from '../types';

export const update =
  (supabase: SupabaseClient) =>
  async (id: string, event: EventsUpdateEntity): Promise<Events> => {
    const { data, error } = await supabase
      .from('events')
      .update<EventsUpdateModel>(toUpdate(event))
      .eq('id', id)
      .select(`*, owner: users!fk_user_id(*), category: events_categories!fk_category_id(*)`);
    if (error) throw error;

    return fromModel(data[0] as EventsModel);
  };
