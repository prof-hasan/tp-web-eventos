alter table events
  add column owner_id text not null,
  add constraint user_foreign_key foreign key (owner_id) references users(id);