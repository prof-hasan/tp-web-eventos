import type { UserEntity } from "../../users";

export type EventsCreateEntity = {
  name: string;
  description: string;
  country: string;
  state: string;
  city: string;
  address: string;
  date: Date;
  time: Date;
  owner: UserEntity;
}

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
}