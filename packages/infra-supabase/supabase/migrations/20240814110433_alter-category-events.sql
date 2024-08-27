alter table events_categories
add column portuguese_title text;

alter table events_categories
add column portuguese_description text;

update events_categories set portuguese_title = 'Musica', portuguese_description = 'Eventos de musica' where id = 'music';
update events_categories set portuguese_title = 'Teatro', portuguese_description = 'Eventos de teatro' where id = 'theater';
update events_categories set portuguese_title = 'Cinema', portuguese_description = 'Eventos de cinema' where id = 'movies';