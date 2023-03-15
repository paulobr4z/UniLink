import Image from "next/image";
import { useContext } from "react";
import { createUser } from "../../services";
import { ContentSignupContainer } from "./styles";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { AuthContext } from "../../contexts/AuthContext";


const signUpSchema = yup.object().shape({
  first_name: yup.string().required('Type your first name.'),
  last_name: yup.string().required('Type your last name.'),
  username: yup.string().required('Type your username.'),
  email: yup.string().required('Digite seu email').email('Invalid email.'),
  password: yup.string().required('Type your password.')
})

export function ContentSignup() {
  const { signIn } = useContext(AuthContext);
  const { register, handleSubmit, formState, clearErrors } = useForm({
    resolver: yupResolver(signUpSchema)
  });

  async function handleSubmitForm(data:any) {
    const response = await createUser(data);

    if (response?.message === 'username already exists') {
      return toast.error(response?.message);
    }

    if (response?.message === 'email already exists') {
      return toast.error(response?.message);
    }

    if (response?.message === 'user created successfully') {
      const loginData = {
        email: data.email,
        password: data.password
      }
  
      await signIn(loginData);
    }
  }

  return (
    <ContentSignupContainer>
      <ToastContainer position="top-right" />
      <div className="leftContent">
        <div className="formContent">
          <h1>Create your account</h1>
          <form onSubmit={handleSubmit(handleSubmitForm)}>
            <input
              type="text"
              placeholder="First name"
              {...register('first_name')}
              onClick={() => clearErrors('first_name')}
            />
            <input
              type="text"
              placeholder="Last name"
              {...register('last_name')}
              onClick={() => clearErrors('last_name')}
            />
            <input 
              className="inputUsername"
              type="text"
              placeholder="Username"
              {...register('username')}
              onClick={() => clearErrors('username')}
            />
            <input
              type="email"
              placeholder="E-mail"
              {...register('email')}
              onClick={() => clearErrors('email')}
            />
            <input
              type="password"
              placeholder="Password"
              {...register('password')}
              onClick={() => clearErrors('password')}
            />
            <button type="submit">
              Create account
            </button>
          </form>
        </div>
      </div>
      <div className="rightContent">
        <Image src='/images/ilustra-signup.svg' width={500} height={500} alt="signup" />
      </div>
    </ContentSignupContainer>
  )
}