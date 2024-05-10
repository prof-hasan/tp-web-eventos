import { FieldValues } from 'react-hook-form';
import { LoginFormContainer } from '../(components)/login-form-container';

const LoginPage = () => {
  const onSubmit = async (data: FieldValues) => {
    'use server';
    console.log(data);
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginFormContainer onSubmit={onSubmit}/>
    </div>
  );
};

export default LoginPage;
