import type { EventsModel, EventsEntity } from '../types';

export const fromModel: (ActingModel: EventsModel) => EventsEntity = ({
  id,
  name,
  description,
  country,
  state,
  city,
  address,
  date,
  time,
  deleted_at,
}) => ({
  id,
  name,
  description,
  country,
  state,
  city,
  address,
  date,
  time,
  deleted: Boolean(deleted_at),
  deletedAt: deleted_at,
});
