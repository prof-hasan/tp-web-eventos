import type { UsersRoles } from './users-roles';

export type UserEntity = {
  id: string;
  externalAuthId: string;
  name: string;
  email: string;
  role: UsersRoles;
  createdAt: string;
  updatedAt: string;
}
