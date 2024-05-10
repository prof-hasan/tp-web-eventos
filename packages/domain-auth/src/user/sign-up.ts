import type { User, SupabaseClient } from '@supabase/supabase-js';
// import { headers } from 'next/headers';

export const signUp =
  (supabase: SupabaseClient) =>
  async (email: string, password: string): Promise<User> => {
    // const options = {
    //   emailRedirecTo: `${headers().get('origin')}/api/auth/callback`,
    // };
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) throw error;
    return data.user ? data.user : ({} as User);
  };
