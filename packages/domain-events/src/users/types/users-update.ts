import type { UsersRoles } from "./users-roles";

export type UserUpdateEntity = {
  id: string;
  name?: string;
  email?: string;
  role?: UsersRoles;
}

export type UserUpdateModel = {
  id: string;
  name?: string;
  email?: string;
  role_id?: string;
}