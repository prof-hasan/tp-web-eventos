import { SupabaseClient } from '@supabase/supabase-js';
import { fromModel } from '../adapters';
import { UserEntity as Users } from '../types';

export const getById =
  (supabase: SupabaseClient) =>
  async (id: string): Promise<Users> => {
    const { data, error } = await supabase
      .from('users')
      .select(`*, role: users_roles(*)`)
      .eq('id', id)
      .is('deleted_at', null);
    if (error) throw error;

    if (!data) throw new Error('No data returned from get by id query. A problem occurred.');

    return fromModel(data[0]);
  };

export const getByExternalAuthId =
  (supabase: SupabaseClient) =>
  async (externalAuthId: string): Promise<Users> => {
    const { data, error } = await supabase
      .from('users')
      .select(`*, role: users_roles(*)`)
      .eq('external_auth_id', externalAuthId)
      .is('deleted_at', null);
    if (error) throw error;

    if (!data) throw new Error('No data returned from get by auth_id query. A problem occurred.');

    return fromModel(data[0]);
  };

export const getByEmail =
  (supabase: SupabaseClient) =>
  async (email: string): Promise<Users> => {
    const { data, error } = await supabase
      .from('users')
      .select(`*, role: users_roles(*)`)
      .eq('email', email)
      .is('deleted_at', null);
    if (error) throw error;
    if (!data) throw new Error('No data returned from get by email query. A problem occurred.');

    return fromModel(data[0]);
  };
