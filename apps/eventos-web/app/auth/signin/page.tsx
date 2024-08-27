'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { FieldValues } from 'react-hook-form';
import { LoginFormContainer } from '../(components)/login-form-container';
import { auth } from '@repo/auth-domain/auth-cli';
import { UserAuth } from '@repo/auth-domain/types';
import { cookies } from 'next/headers';

const LoginPage = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {

  const returnTo = searchParams.returnTo as string;

  const onSubmit = async (data: FieldValues) => {
    'use server';
    let user = {} as UserAuth;
    try {
      user = await auth.forServerAction().auth().signIn({ email: data.email, password: data.password });
    } catch (error) {
      console.log(error);
      return;
    }
    if (user) {
      cookies().set('user', JSON.stringify(user));
      revalidatePath('/');
      returnTo ? redirect(returnTo) : redirect('/');
    }
  };

  return (
    <div>
      <LoginFormContainer onSubmit={onSubmit} />
    </div>
  );
};

export default LoginPage;
