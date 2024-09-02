create table if not exists events (
  id text default encode(uuid_send(uuid_generate_v4()::uuid),'base64') primary key,
  name text not null,
  description text not null,
  country text not null,
  state text not null,
  city text not null,
  address text null,
  date date not null,
  time time not null,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now(),
  deleted_at timestamp with time zone default null -- Soft delete
);

create extension if not exists moddatetime schema extensions;

create or replace trigger
  handle_updated_at before update
  on events
  for each row 
execute procedure moddatetime(updated_at);
