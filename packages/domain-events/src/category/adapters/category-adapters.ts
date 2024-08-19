import { EventsCategoryEntity, EventsCategoryModel } from "../types";

export const fromModel = (model: EventsCategoryModel): EventsCategoryEntity => {
  return {
    id: model.id,
    name: model.name,
    title: model.portuguese_title,
    description: model.portuguese_description
  };
}