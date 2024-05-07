import { type SupabaseClient } from '@supabase/supabase-js';
import { fromModel } from '../adapters';
import { type UserModel, type UserEntity as Users } from '../types';

export const remove =
  (supabase: SupabaseClient) =>
  async (id: string): Promise<Users> => {
    const { data, error } = await supabase
      .from('users')
      .update({ deleted_at: new Date().toISOString() })
      .eq('id', id)
      .select(`*, role: users_roles(*)`);
    if (error) throw error;

    return fromModel(data[0] as UserModel);
  };
