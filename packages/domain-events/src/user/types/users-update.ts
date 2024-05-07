import { UsersRoles } from "./users-roles";

export interface UserUpdateEntity {
  id: string;
  name?: string;
  email?: string;
  role?: UsersRoles;
}

export interface UserUpdateModel {
  id: string;
  name?: string;
  email?: string;
  role_id?: string;
}