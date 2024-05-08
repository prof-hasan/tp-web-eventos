import type { EventsModel } from "../../events";
import type { UserModel } from "../../users/types";

export type UsersEventsModel = {
  event_id: string;
  event: EventsModel;
  user_id: string;
  user: UserModel;
}