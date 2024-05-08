import type { UserEntity } from "../../users/types";

export type EventsModel = {
  id: string;
  name: string;
  description: string;
  country: string;
  state: string;
  city: string;
  address: string;
  date: Date;
  time: Date;
  owner_id: string;
  owner: UserEntity;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}
