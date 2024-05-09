import { type SupabaseClient } from '@supabase/supabase-js';
import { fromModel, toCreate } from '../adapters';
import { type EventsCreateEntity, type EventsCreateModel, type EventsEntity as Events, type EventsModel } from '../types';

export const create =
  (supabase: SupabaseClient) =>
  async (event: EventsCreateEntity): Promise<Events> => {
    const { data, error } = await supabase
      .from('events')
      .insert<EventsCreateModel>(toCreate(event))
      .select(`*, owner: users!fk_user_id(*)`);
    if (error) throw error;

    return fromModel(data[0] as EventsModel);
  };

export const bulkCreate =
  (supabase: SupabaseClient) =>
  async (events: EventsCreateEntity[]): Promise<Events[]> => {
    const { data, error } = await supabase
      .from('events')
      .insert<EventsCreateModel[]>(events.map(toCreate))
      .select(`*, owner: users!fk_user_id(*)`);
    if (error) throw error;

    return data.map(fromModel);
  };
