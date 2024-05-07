import { type SupabaseClient } from '@supabase/supabase-js';
import { fromModel, toUpdate } from '../adapters';
import { type UserModel, type UserUpdateEntity, type UserUpdateModel, type UserEntity as Users } from '../types';

export const update =
  (supabase: SupabaseClient) =>
  async (id: string, user: UserUpdateEntity): Promise<Users> => {
    const { data, error } = await supabase
      .from('users')
      .update<UserUpdateModel>(toUpdate(user))
      .eq('id', id)
      .select(`*, role: users_roles(*)`);
    if (error) throw error;

    return fromModel(data[0] as UserModel);
  };
