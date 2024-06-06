alter table events
  add column owner_id text not null,
  add constraint fk_user_id foreign key (owner_id) references users(id);