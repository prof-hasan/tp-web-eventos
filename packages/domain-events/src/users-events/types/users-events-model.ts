import { EventsEntity, EventsModel } from "../../events";
import { UserEntity, UserModel } from "../../users/types";

export interface UsersEventsModel {
  event_id: string;
  event: EventsModel;
  user_id: string;
  user: UserModel;
}