import type { User, SupabaseClient } from '@supabase/supabase-js';

export const signIn =
  (supabase: SupabaseClient) =>
  async (email: string, password: string): Promise<User> => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data.user ? data.user : ({} as User);
  };
