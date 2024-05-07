import { SupabaseClient } from '@supabase/supabase-js';
import { fromModel, toUpdate } from '../adapters';
import { UserUpdateEntity, UserUpdateModel, UserEntity as Users } from '../types';

export const update =
  (supabase: SupabaseClient) =>
  async (id: string, user: UserUpdateEntity): Promise<Users> => {
    const { data, error } = await supabase
      .from('users')
      .update<UserUpdateModel>(toUpdate(user))
      .eq('id', id)
      .select(`*, role: users_roles(*)`);
    if (error) throw error;

    if (!data) throw new Error('No data returned from update query. A problem occurred.');

    return fromModel(data[0]);
  };
