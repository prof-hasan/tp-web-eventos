import { type SupabaseClient } from '@supabase/supabase-js';
import * as Events from './events';
import * as User from './user';

export const EventsDomain = (supabase: SupabaseClient) => ({
  events: () => ({
    create: (event: Events.EventsCreateEntity) => Events.create(supabase)(event),
    bulkCreate: (events: Events.EventsCreateEntity[]) => Events.bulkCreate(supabase)(events),
    list: Events.list(supabase),
    id: (id: string) => ({
      get: () => Events.getById(supabase)(id),
      remove: () => Events.remove(supabase)(id),
      update: (event: Events.EventsUpdateEntity) => Events.update(supabase)(id, event),
    }),
    owner_id: (owner_id: string) => ({
      get: () => Events.getByOwnerId(supabase)(owner_id),
    }),
  }),
  
  users: () => ({
    create: (user: User.UserCreateEntity) => User.create(supabase)(user),
    bulkCreate: (users: User.UserCreateEntity[]) => User.bulkCreate(supabase)(users),
    list: User.list(supabase),
    id: (id: string) => ({
      get: () => User.getById(supabase)(id),
      remove: () => User.remove(supabase)(id),
      update: (user: User.UserUpdateEntity) => User.update(supabase)(id, user),
    }),
    email: (email: string) => ({
      get: () => User.getByEmail(supabase)(email),
    }),
    auth_id: (auth_id: string) => ({
      get: () => User.getByExternalAuthId(supabase)(auth_id),
    }),
  }),
});
