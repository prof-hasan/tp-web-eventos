create table if not exists events_categories (
  id text not null,
  name text,

  primary key (id)
);

insert into events_categories (id, name)
  values 
    ('music', 'Music'),
    ('theater', 'Theater'),
    ('movies', 'Movies');

alter table events
  add column category text not null,
  add constraint fk_category_id foreign key (category) references events_categories(id);