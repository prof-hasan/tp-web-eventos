import { UsersRoles } from "./users-roles";

export interface UserCreateEntity {
  name: string;
  email: string;
  role: UsersRoles;
  externalAuthId?: string;
}

export interface UserCreateModel {
  name: string;
  email: string;
  role_id: string;
  external_auth_id: string | null;
}