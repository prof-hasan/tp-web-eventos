import type { UserEntity } from '../../users';

export type EventsCreateEntity = {
  id?: string;
  name: string;
  description: string;
  country: string;
  state: string;
  city: string;
  address: string;
  date: Date;
  time: Date;
  owner: UserEntity | { id: string };
};

export type EventsCreateModel = {
  id?: string;
  name: string;
  description: string;
  country: string;
  state: string;
  city: string;
  address: string;
  date: Date;
  time: Date;
  owner_id: string;
};
