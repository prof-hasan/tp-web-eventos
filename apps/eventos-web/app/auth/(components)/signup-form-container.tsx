'use client';

import { Controller, useForm, type FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema } from './forms-schemas';
import { InputWithLabel } from '@repo/design-system/molecules';
import { Button } from '@repo/design-system/atoms';

interface SignUpFormContainerProps {
  onSubmit: (data: FieldValues) => void;
}

export const SignUpFormContainer = ({onSubmit}: SignUpFormContainerProps) => {
  const { control, formState, handleSubmit } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onFormSubmit = (data: FieldValues) => {
    onSubmit(data);
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <Controller
        name='name'
        control={control}
        render={({ field: { onChange, value } }) => (
          <InputWithLabel
            label='Nome'
            type='text'
            placeholder='Digite seu nome'
            onChange={onChange}
          />
        )}
      />
      { formState.errors.name && <span>{`${formState.errors.name.message}`}</span> }
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
      { formState.errors.email && <span>{`${formState.errors.email.message}`}</span> }
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
      { formState.errors.password && <span>{`${formState.errors.password.message}`}</span> }
      <Button type='submit'>Entrar</Button>
    </form>
  );
};
