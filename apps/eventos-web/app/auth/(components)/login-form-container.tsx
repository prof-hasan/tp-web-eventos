'use client';

import { useForm, type FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from './forms-schemas';
import { InputWithLabel } from '@repo/design-system/molecules';
import { Button } from '@repo/design-system/atoms';

interface LoginFormContainerProps {
  onSubmit: (data: FieldValues) => void;
}

export const LoginFormContainer = ({onSubmit}: LoginFormContainerProps) => {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onFormSubmit = (data: FieldValues) => {
    onSubmit(data);
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <InputWithLabel
        label='Email'
        type='email'
        {...register('email')}
        placeholder='Digite seu email'
      />
      <InputWithLabel
        label='Senha'
        type='password'
        {...register('password')}
        placeholder='Digite sua senha'
      />
      <Button type='submit'>Entrar</Button>
    </form>
  );
};
