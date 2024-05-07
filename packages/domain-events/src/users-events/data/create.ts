import { SupabaseClient } from '@supabase/supabase-js';
import { fromModel, toCreate } from '../adapters';
import { UsersEventsCreateModel, UsersEventsCreateEntity, UsersEventsEntity as UsersEvents } from '../types';

export const create =
  (supabase: SupabaseClient) =>
  async (user: UsersEventsCreateEntity): Promise<UsersEvents> => {
    const { data, error } = await supabase
      .from('users_events')
      .insert<UsersEventsCreateModel>(toCreate(user))
      .select(`*, event: events(*), user: users(*, role: users_roles(*))`);
    if (error) throw error;

    if (!data) throw new Error('No data returned from insert query. A problem occurred.');

    return fromModel(data[0]);
  };

export const bulkCreate =
  (supabase: SupabaseClient) =>
  async (users: UsersEventsCreateEntity[]): Promise<UsersEvents[]> => {
    const { data, error } = await supabase
      .from('users_events')
      .insert<UsersEventsCreateModel[]>(users.map(toCreate))
      .select(`*, event: events(*), user: users(*, role: users_roles(*))`);
    if (error) throw error;

    if (!data) throw new Error('No data returned from insert query. A problem occurred.');

    return data.map(fromModel);
  };
