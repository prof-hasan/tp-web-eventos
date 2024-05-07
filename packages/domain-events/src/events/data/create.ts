import { SupabaseClient } from '@supabase/supabase-js';
import { fromModel, toCreate } from '../adapters';
import { EventsCreateEntity, EventsCreateModel, EventsEntity as Events } from '../types';

export const create =
  (supabase: SupabaseClient) =>
  async (event: EventsCreateEntity): Promise<Events> => {
    const { data, error } = await supabase
      .from('events')
      .insert<EventsCreateModel>(toCreate(event))
      .select(`*, owner: users(*)`);
    if (error) throw error;

    if (!data) throw new Error('No data returned from create query. A problem occurred.');

    return fromModel(data[0]);
  };

export const bulkCreate =
  (supabase: SupabaseClient) =>
  async (events: EventsCreateEntity[]): Promise<Events[]> => {
    const { data, error } = await supabase
      .from('events')
      .insert<EventsCreateModel[]>(events.map(toCreate))
      .select(`*, owner: users(*)`);
    if (error) throw error;

    if (!data) throw new Error('No data returned from create query. A problem occurred.');

    return data.map(fromModel);
  };
