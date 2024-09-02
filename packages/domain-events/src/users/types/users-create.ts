import type { UsersRoles } from "./users-roles";

export type UserCreateEntity = {
  id?: string;
  name: string;
  email: string;
  role: UsersRoles;
  externalAuthId?: string;
}

export type UserCreateModel = {
  id?: string;
  name: string;
  email: string;
  role_id: string;
  external_auth_id: string | null;
}