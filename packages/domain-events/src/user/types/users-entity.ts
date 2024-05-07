import { UsersRoles } from './users-roles';

export interface UserEntity {
  id: string;
  externalAuthId: string;
  name: string;
  email: string;
  role: UsersRoles;
  createdAt: string;
  updatedAt: string;
}
