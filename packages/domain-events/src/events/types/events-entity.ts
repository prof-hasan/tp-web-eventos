import { EventsCategoryEntity } from "../../category";
import type { UserEntity } from "../../users/types";

export type EventsEntity = {
  id: string;
  name: string;
  description: string;
  country: string;
  state: string;
  city: string;
  address: string;
  date: Date;
  time: Date;
  owner: UserEntity;
  category: EventsCategoryEntity
  deletedAt: Date;
  deleted: boolean;
}
