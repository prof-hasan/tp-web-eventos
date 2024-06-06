create table if not exists users (
  id text default encode(uuid_send(uuid_generate_v4()::uuid),'base64') primary key,
  external_auth_id text not null unique,
  name text not null,
  email text not null unique,
  role_id text not null default 'user',
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now(),
  deleted_at timestamp with time zone default null, -- Soft delete

  constraint fk_role_id foreign key (role_id) references users_roles(id)
);

create extension if not exists moddatetime schema extensions;

create or replace trigger
  handle_updated_at before update
  on events
  for each row 
execute procedure moddatetime(updated_at);
