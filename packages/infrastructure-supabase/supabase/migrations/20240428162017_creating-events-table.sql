create table if not exists events (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text not null,
  country text not null,
  state text not null,
  city text not null,
  location text null,
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
