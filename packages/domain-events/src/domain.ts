import { type SupabaseClient } from '@supabase/supabase-js';
import * as Category from './category';
import * as Events from './events';
import * as Users from './users';
import * as UsersEvents from './users-events';

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
    category: (category: string) => ({
      get: () => Events.getByCategory(supabase)(category),
    }),
    owner_id: (owner_id: string) => ({
      get: () => Events.getByOwnerId(supabase)(owner_id),
    }),
    search: () => ({
      name: (name: string) => ({
        get: () => Events.getBySearchByName(supabase)(name),
      }),
    }),
  }),
  
  users: () => ({
    create: (user: Users.UserCreateEntity) => Users.create(supabase)(user),
    bulkCreate: (users: Users.UserCreateEntity[]) => Users.bulkCreate(supabase)(users),
    list: Users.list(supabase),
    id: (id: string) => ({
      get: () => Users.getById(supabase)(id),
      remove: () => Users.remove(supabase)(id),
      update: (user: Users.UserUpdateEntity) => Users.update(supabase)(id, user),
    }),
    email: (email: string) => ({
      get: () => Users.getByEmail(supabase)(email),
    }),
    auth_id: (auth_id: string) => ({
      get: () => Users.getByExternalAuthId(supabase)(auth_id),
    }),
  }),

  users_events: () => ({
    create: (user_event: UsersEvents.UsersEventsCreateEntity) => UsersEvents.create(supabase)(user_event),
    bulkCreate: (users_events: UsersEvents.UsersEventsCreateEntity[]) => UsersEvents.bulkCreate(supabase)(users_events),
    list: UsersEvents.list(supabase),
    event_id: (event_id: string) => ({
      get: () => UsersEvents.getByEventId(supabase)(event_id),
    }),
    user_id: (user_id: string) => ({
      get: () => UsersEvents.getByUserId(supabase)(user_id),
    }),
    remove: ({event_id, user_id}: {event_id: string, user_id: string}) => UsersEvents.remove(supabase)(event_id, user_id),
  }),

  category: () => ({

    list: Category.list(supabase),
    id: (id: string) => ({
      get: () => Category.getById(supabase)(id)
    })

  })
});
