import { type SupabaseClient } from '@supabase/supabase-js';
import { fromModel } from '../adapters';
import { type UserEntity as Users } from '../types';

export const list = (supabase: SupabaseClient) => async (): Promise<Users[]> => {
  const { data, error } = await supabase.from('users').select(`*, role: users_roles(*)`).is('deleted_at', null);
  if (error) throw error;

  return data.map(fromModel);
};
