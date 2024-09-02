import { type SupabaseClient } from '@supabase/supabase-js';
import { fromModel } from '../adapters';
import { type EventsModel, type EventsEntity as Events } from '../types';

export const getById =
  (supabase: SupabaseClient) =>
  async (id: string): Promise<Events> => {
    const { data, error } = await supabase
      .from('events')
      .select(`*, owner: users!fk_user_id(*), category: events_categories!fk_category_id(*)`)
      .eq('id', id)
      .is('deleted_at', null);
    if (error) throw error;

    return fromModel(data[0] as EventsModel);
  };

export const getByOwnerId =
  (supabase: SupabaseClient) =>
  async (owner_id: string): Promise<Events[]> => {
    const { data, error } = await supabase
      .from('events')
      .select(`*, owner: users!fk_user_id(*), category: events_categories!fk_category_id(*)`)
      .eq('owner_id', owner_id)
      .is('deleted_at', null);
    if (error) throw error;

    return data.map((event: EventsModel) => fromModel(event));
  };

export const getByCategory =
  (supabase: SupabaseClient) =>
  async (category: string): Promise<Events[]> => {
    const { data, error } = await supabase
      .from('events')
      .select(`*, owner: users!fk_user_id(*), category: events_categories!fk_category_id(*)`)
      .eq('category', category)
      .is('deleted_at', null);
    if (error) throw error;

    return data.map((event: EventsModel) => fromModel(event));
  };

export const getBySearchByName =
  (supabase: SupabaseClient) =>
  async (search: string): Promise<Events[]> => {
    const { data, error } = await supabase
      .from('events')
      .select(`*, owner: users!fk_user_id(*)`)
      .ilike('name', `%${search}%`)
      .is('deleted_at', null);

    if (error) throw error;

    return data.map((event: EventsModel) => fromModel(event));
  };
