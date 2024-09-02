import { type SupabaseClient } from '@supabase/supabase-js';
import { fromModel, toCreate } from '../adapters';
import {
  type UsersEventsCreateModel,
  type UsersEventsCreateEntity,
  type UsersEventsEntity as UsersEvents,
  type UsersEventsModel,
} from '../types';

export const create =
  (supabase: SupabaseClient) =>
  async (user: UsersEventsCreateEntity): Promise<UsersEvents> => {
    const { data, error } = await supabase
      .from('users_events')
      .insert<UsersEventsCreateModel>(toCreate(user))
      .select(`*, event: events!fk_event_id(*), user: users!fk_user_id(*, role: users_roles(*))`);
    if (error) throw error;

    return fromModel(data[0] as UsersEventsModel);
  };

export const bulkCreate =
  (supabase: SupabaseClient) =>
  async (users: UsersEventsCreateEntity[]): Promise<UsersEvents[]> => {
    const { data, error } = await supabase
      .from('users_events')
      .insert<UsersEventsCreateModel[]>(users.map(toCreate))
      .select(`*, event: events!fk_event_id(*), user: users!fk_user_id(*, role: users_roles(*))`);
    if (error) throw error;

    return data.map(fromModel);
  };
