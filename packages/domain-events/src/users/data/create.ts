import { SupabaseClient } from '@supabase/supabase-js';
import { fromModel, toCreate } from '../adapters';
import { UserCreateModel, UserCreateEntity, UserEntity as Users } from '../types';

export const create =
  (supabase: SupabaseClient) =>
  async (user: UserCreateEntity): Promise<Users> => {
    const { data, error } = await supabase
      .from('users')
      .insert<UserCreateModel>(toCreate(user))
      .select(`*, roles: users_roles(*)`);
    if (error) throw error;

    if (!data) throw new Error('No data returned from insert query. A problem occurred.');

    return fromModel(data[0]);
  };

export const bulkCreate =
  (supabase: SupabaseClient) =>
  async (users: UserCreateEntity[]): Promise<Users[]> => {
    const { data, error } = await supabase
      .from('users')
      .insert<UserCreateModel[]>(users.map(toCreate))
      .select(`*, role: users_roles(*)`);
    if (error) throw error;

    if (!data) throw new Error('No data returned from insert query. A problem occurred.');

    return data.map(fromModel);
  };
