import { UsersRoles } from "./users-roles";

export interface UserModel {
  id: string;
  external_auth_id: string;
  name: string;
  email: string;
  role: UsersRoles;
  created_at: string;
  updated_at: string;
  deleted_at?: string;
}