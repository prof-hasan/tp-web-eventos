create table if not exists users_events (
  event_id text,
  user_id text,

  primary key (event_id, user_id),
  constraint fk_event_id foreign key (event_id) references events(id),
  constraint fk_user_id foreign key (user_id) references users(id)
);