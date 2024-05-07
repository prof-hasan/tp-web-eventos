import { EventsEntity } from "../../events";
import { UserEntity } from "../../users/types";

export interface UsersEventsEntity {
  event: EventsEntity;
  user: UserEntity;
}