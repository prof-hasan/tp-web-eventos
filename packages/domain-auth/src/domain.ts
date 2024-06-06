import type { EmailOtpType, SupabaseClient } from '@supabase/supabase-js';
import * as User from './user';

export const AuthDomain = (supabase: SupabaseClient) => ({
  auth: () => ({
    signIn: ({ email, password }: { email: string; password: string }) => User.signIn(supabase)(email, password),
    signUp: ({ email, password }: { email: string; password: string }) => User.signUp(supabase)(email, password),
    signOut: () => supabase.auth.signOut(),
    user: () => ({
      get: () => User.get(supabase)(),
    }),
  }),

  actions: () => ({
    exchangeCode: (code: string) => supabase.auth.exchangeCodeForSession(code),
    updateSession: () => supabase.auth.getUser(),
    verifyOtp: ({ token_hash, type }: { token_hash: string; type: EmailOtpType }) =>
      supabase.auth.verifyOtp({ token_hash, type }),
  }),
});
