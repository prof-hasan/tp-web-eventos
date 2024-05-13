'use client';

import { Controller, useForm, type FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from './forms-schemas';
import { InputWithLabel } from '@repo/design-system/molecules';
import { Button } from '@repo/design-system/atoms';

interface LoginFormContainerProps {
  onSubmit: (data: FieldValues) => void;
}

export const LoginFormContainer = ({ onSubmit }: LoginFormContainerProps) => {
  const { control, formState, handleSubmit } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onFormSubmit = (data: FieldValues) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <Controller
        name='email'
        control={control}
        render={({ field: { onChange, value } }) => (
          <InputWithLabel
            label='Email'
            type='email'
            placeholder='Digite seu email'
            onChange={onChange}
          />
        )}
      />
      {formState.errors.email && <span>{`${formState.errors.email.message}`}</span>}
      <Controller
        name='password'
        control={control}
        render={({ field: { onChange, value } }) => (
          <InputWithLabel
            label='Senha'
            type='password'
            placeholder='Digite sua senha'
            onChange={onChange}
          />
        )}
      />
      {formState.errors.password && <span>{`${formState.errors.password.message}`}</span>}
      <Button type='submit'>Entrar</Button>
    </form>
  );
};
