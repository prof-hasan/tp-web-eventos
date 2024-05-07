import type { UserModel, UserEntity, UserCreateEntity, UserCreateModel, UserUpdateEntity, UserUpdateModel } from '../types';

export const fromModel: (ActingModel: UserModel) => UserEntity = ({
  id,
  name,
  external_auth_id,
  email,
  role,
  created_at,
  updated_at,
}) => ({
  id,
  name,
  externalAuthId: external_auth_id,
  email,
  role,
  createdAt: created_at,
  updatedAt: updated_at,
});

export const fromEntity: (ActingModel: UserEntity) => UserModel = ({
  id,
  name,
  externalAuthId,
  email,
  role,
  createdAt,
  updatedAt,
}) => ({
  id,
  name,
  external_auth_id: externalAuthId,
  email,
  role,
  created_at: createdAt,
  updated_at: updatedAt,
});

export const toCreate: (ActingModel: UserCreateEntity) => UserCreateModel = ({
  name,
  email,
  role,
  externalAuthId,
}) => ({
  name,
  email,
  role_id: role?.id || 'user',
  external_auth_id: externalAuthId || null,
});

export const toUpdate: (ActingModel: UserUpdateEntity) => UserUpdateModel = ({
  id,
  name,
  email,
  role,
}) => ({
  id,
  name,
  email,
  role_id: role?.id,
});