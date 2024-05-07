import { EventsEntity } from "../../events";
import { UserEntity } from "../../users/types";

export interface UsersEventsCreateEntity {
  event: EventsEntity;
  user: UserEntity;
}

export interface UsersEventsCreateModel {
  event_id: string;
  user_id: string;
}