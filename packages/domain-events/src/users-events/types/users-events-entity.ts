import type { EventsEntity } from "../../events";
import type { UserEntity } from "../../users/types";

export interface UsersEventsEntity {
  event: EventsEntity;
  user: UserEntity;
}