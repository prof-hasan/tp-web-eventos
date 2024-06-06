import type { UserEntity } from '../../users';

export type EventsCreateEntity = {
  name: string;
  description: string;
  country: string;
  state: string;
  city: string;
  address: string;
  date: Date;
  time: Date;
  owner: UserEntity | Omit<UserEntity, 'externalAuthId' | 'name' | 'email' | 'role' | 'createdAt' | 'updatedAt'>;
};

export type EventsCreateModel = {
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
