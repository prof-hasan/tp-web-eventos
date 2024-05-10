import { FieldValues } from 'react-hook-form';
import { SignUpFormContainer } from '../(components)/signup-form-container';
import { auth } from '@repo/auth-domain/auth-cli';
import { UserAuth } from '@repo/auth-domain/types';
import { events } from '@repo/events-domain/events-cli';
import { UserEntity } from '@repo/events-domain/user-types';

const SignUpPage = () => {
  const onSubmit = async (data: FieldValues) => {
    'use server';
    let userAuth: UserAuth = {} as UserAuth;
    try {
      userAuth = await auth.forServerAction().auth().signUp({ email: data.email, password: data.password });
    } catch (error) {
      console.log(error);
      return;
    }

    let user: UserEntity = {} as UserEntity;
    if (!userAuth) {
      return;
    }
    try {
      user = await events.forServerAction().users().create({
        name: data.name,
        email: data.email,
        role: 'user',
        externalAuthId: userAuth.id,
      });
    } catch (error) {
      console.log(error);
      return;
    }
  };

  return (
    <div>
      <h1>Cadastro</h1>
      <SignUpFormContainer onSubmit={onSubmit} />
    </div>
  );
};

export default SignUpPage;
