import type { User, SupabaseClient } from '@supabase/supabase-js';

export const get =
  (supabase: SupabaseClient) =>
  async (): Promise<User> => {
    const { data, error } = await supabase.auth.getUser();
    if (error) throw error;
    return data.user ? data.user : ({} as User);
  };
