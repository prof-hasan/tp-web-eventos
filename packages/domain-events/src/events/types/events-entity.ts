export interface EventsEntity {
  id: string;
  name: string;
  description: string;
  country: string;
  state: string;
  city: string;
  address: string;
  date: Date;
  time: Date;
  deletedAt: Date;
  deleted: boolean;
}