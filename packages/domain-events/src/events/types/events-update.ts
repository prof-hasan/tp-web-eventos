import { EventsCategoryEntity, EventsCategoryModel } from "../../category";

export type EventsUpdateEntity = {
  id: string;
  name?: string;
  description?: string;
  country?: string;
  state?: string;
  city?: string;
  address?: string;
  date?: Date;
  time?: Date;
  category?: EventsCategoryEntity | { id: string };
}

export type EventsUpdateModel = {
  id: string;
  name?: string;
  description?: string;
  country?: string;
  state?: string;
  city?: string;
  address?: string;
  date?: Date;
  time?: Date;
  category?: EventsCategoryModel | { id: string };
}