'use client';

import { Controller, useForm, type FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from './forms-schemas';
import { InputLabel } from '@repo/design-system/molecules';
import { Button } from '@repo/design-system/atoms';
import { useRouter } from 'next/navigation';

interface LoginFormContainerProps {
  onSubmit: (data: FieldValues) => void;
}

export const LoginFormContainer = ({ onSubmit }: LoginFormContainerProps) => {
  const router = useRouter();

  const { control, formState, handleSubmit } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onFormSubmit = (data: FieldValues) => {
    onSubmit(data);
  };

  const onRegisterClick = () => {
    router.push('/auth/signup');
  };

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className='flex flex-col items-center justify-center gap-5 p-2'
    >
      <div className='flex w-3/4 flex-col gap-2'>
        <div>
          <Controller
            name='email'
            control={control}
            render={({ field: { onChange, value } }) => (
              <InputLabel
                label='Email'
                type='email'
                placeholder='Digite seu email'
                onChange={onChange}
              />
            )}
          />
          {formState.errors.email && (
            <span className='text-sm text-red-500'>{`${formState.errors.email.message}`}</span>
          )}
        </div>
        <div>
          <Controller
            name='password'
            control={control}
            render={({ field: { onChange, value } }) => (
              <InputLabel
                label='Senha'
                type='password'
                placeholder='Digite sua senha'
                onChange={onChange}
              />
            )}
          />
          {formState.errors.password && (
            <span className='text-sm text-red-500'>{`${formState.errors.password.message}`}</span>
          )}
        </div>
      </div>
      <div className='flex w-3/4 flex-row items-center justify-center gap-2'>
        <Button
          type='submit'
          className='w-1/4'
        >
          Login
        </Button>
        <Button
          className='w-1/4'
          onClick={onRegisterClick}
        >
          Cadastre-se
        </Button>
      </div>
    </form>
  );
};
