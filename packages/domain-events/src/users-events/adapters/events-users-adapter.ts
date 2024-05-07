import { UsersEventsCreateEntity, UsersEventsCreateModel, UsersEventsEntity, UsersEventsModel } from "../types";
import { fromModel as eventsFromModel, fromEntity as eventsFromEntity } from "../../events";
import { fromModel as usersFromModel, fromEntity as usersFromEntity } from "../../users";

export const fromModel: (UserModel: UsersEventsModel) => UsersEventsEntity = ({
  event,
  user,
}) => ({
  event: eventsFromModel(event),
  user: usersFromModel(user),
});

export const fromEntity: (UserEntity: UsersEventsEntity) => UsersEventsModel = ({
  event,
  user,
}) => ({
  event_id: event.id,
  event: eventsFromEntity(event),
  user_id: user.id,
  user: usersFromEntity(user),
});

export const toCreate: (UserEntity: UsersEventsCreateEntity) => UsersEventsCreateModel = ({
  event,
  user,
}) => ({
  event_id: event.id,
  user_id: user.id,
});