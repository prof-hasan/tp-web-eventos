import type { EventsEntity } from "../../events";
import type { UserEntity } from "../../users/types";

export type UsersEventsCreateEntity = {
  event: EventsEntity;
  user: UserEntity;
}

export type UsersEventsCreateModel = {
  event_id: string;
  user_id: string;
}