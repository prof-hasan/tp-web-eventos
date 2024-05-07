import { type SupabaseClient } from '@supabase/supabase-js';
import * as Events from './events';
import * as User from './user';

export const EventsDomain = (supabase: SupabaseClient) => ({
  events: () => ({
    list: Events.list(supabase),
  }),
  users : () => ({
    create: (user: User.UserCreateEntity) => User.create(supabase)(user),
    list: User.list(supabase),
    id: (id: string) => ({
      get: () => User.getById(supabase)(id),
      remove: () => User.remove(supabase)(id),
      update: (user: User.UserEntity) => User.update(supabase)(id, user),
    }),
    email: (email: string) => ({
      get: () => User.getByEmail(supabase)(email),
    }),
    auth_id: (auth_id: string) => ({
      get: () => User.getByExternalAuthId(supabase)(auth_id),
    }),
  }),
});
