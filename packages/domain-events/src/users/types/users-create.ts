import type { UsersRoles } from "./users-roles";

export type UserCreateEntity = {
  name: string;
  email: string;
  role: UsersRoles;
  externalAuthId?: string;
}

export type UserCreateModel = {
  name: string;
  email: string;
  role_id: string;
  external_auth_id: string | null;
}