'use client';

import { Controller, useForm, type FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema } from './forms-schemas';
import { InputLabel } from '@repo/design-system/molecules';
import { Button } from '@repo/design-system/atoms';
import { useRouter } from 'next/navigation';

interface SignUpFormContainerProps {
  onSubmit: (data: FieldValues) => void;
}

export const SignUpFormContainer = ({ onSubmit }: SignUpFormContainerProps) => {
  const router = useRouter();

  const { control, formState, handleSubmit } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onFormSubmit = (data: FieldValues) => {
    onSubmit(data);
  };

  const onLoginClick = () => {
    router.push('/auth/signin');
  };

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className='flex flex-col items-center justify-center gap-5 p-2'
    >
      <div className='flex w-3/4 flex-col gap-2'>
        <div>
          <Controller
            name='name'
            control={control}
            render={({ field: { onChange, value } }) => (
              <InputLabel
                label='Nome'
                type='text'
                placeholder='Digite seu nome'
                onChange={onChange}
              />
            )}
          />
          {formState.errors.name && <span className='text-sm text-red-500'>{`${formState.errors.name.message}`}</span>}
        </div>
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
          Cadastre-se
        </Button>
        <Button
          className='w-1/4'
          onClick={onLoginClick}
        >
          Faça login
        </Button>
      </div>
    </form>
  );
};
