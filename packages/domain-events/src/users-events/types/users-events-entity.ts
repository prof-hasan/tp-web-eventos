import type { EventsEntity } from "../../events";
import type { UserEntity } from "../../users/types";

export type UsersEventsEntity = {
  event: EventsEntity;
  user: UserEntity;
}