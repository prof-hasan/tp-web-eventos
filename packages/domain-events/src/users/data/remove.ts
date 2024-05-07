import { SupabaseClient } from '@supabase/supabase-js';
import { fromModel } from '../adapters';
import { UserEntity as Users } from '../types';

export const remove =
  (supabase: SupabaseClient) =>
  async (id: string): Promise<Users> => {
    const { data, error } = await supabase
      .from('users')
      .update({ deleted_at: new Date().toISOString() })
      .eq('id', id)
      .select(`*, role: users_roles(*)`);
    if (error) throw error;

    if (!data) throw new Error('No data returned from remove query. A problem occurred.');

    return fromModel(data[0]);
  };
