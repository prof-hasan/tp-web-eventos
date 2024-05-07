import { UserEntity } from "../../user/types";

export interface EventsEntity {
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
  deletedAt: Date;
  deleted: boolean;
}
