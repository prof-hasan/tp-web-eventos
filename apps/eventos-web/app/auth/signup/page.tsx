import { FieldValues } from "react-hook-form";
import { SignUpFormContainer } from "../(components)/signup-form-container";

const SignUpPage = () => {

  const onSubmit = async (data: FieldValues) => {
    'use server'
    console.log(data);
  }

  return (
    <div>
      <h1>Cadastro</h1>
      <SignUpFormContainer onSubmit={onSubmit}/>
    </div>
  );
};

export default SignUpPage;