import { type SupabaseClient } from '@supabase/supabase-js';
import { fromModel, toCreate } from '../adapters';
import { type UserCreateModel, type UserCreateEntity, type UserEntity as Users, type UserModel } from '../types';

export const create =
  (supabase: SupabaseClient) =>
  async (user: UserCreateEntity): Promise<Users> => {
    const { data, error } = await supabase
      .from('users')
      .insert<UserCreateModel>(toCreate(user))
      .select(`*, roles: users_roles(*)`);
    if (error) throw error;

    return fromModel(data[0] as UserModel);
  };

export const bulkCreate =
  (supabase: SupabaseClient) =>
  async (users: UserCreateEntity[]): Promise<Users[]> => {
    const { data, error } = await supabase
      .from('users')
      .insert<UserCreateModel[]>(users.map(toCreate))
      .select(`*, role: users_roles(*)`);
    if (error) throw error;

    return data.map(fromModel);
  };
