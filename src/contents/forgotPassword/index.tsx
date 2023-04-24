import { HeaderDefault } from "../../components/HeaderDefault";
import { ContentForgotPasswordContainer } from "./styles";
import { forgotPassword } from "../../services";

import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ButtonDefault } from "../../components/ButtonDefault";

const signUpSchema = yup.object().shape({
  email: yup.string().required('Digite seu email').email('Invalid email.')
})

interface IDataForm {
  email: string
}

export function ContentForgotPassword() {
  const [emailSent, setEmailSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const { register, handleSubmit, formState: { errors }, clearErrors } = useForm<IDataForm>({
    resolver: yupResolver(signUpSchema)
  });

  async function handleSendResetLink(data:IDataForm) {
    const { email } = data;
    setLoading(true);

    console.log(data)

    try {
      await forgotPassword(data);
      setEmailSent(true);
      setEmail(email);
      setLoading(false);
    } catch (error) {
      toast.error(`${error}`);
      setLoading(false);
    }
  }

  return (
    <ContentForgotPasswordContainer>
      <HeaderDefault />
      <ToastContainer position="top-right" />
      {!emailSent ? (
          <>
            <h2>Forgot your password?</h2>
            <main>
              <p>
                Enter the email address associated with your account, 
                and we&apos;ll email you a link to reset your password.
              </p>
              <form onSubmit={handleSubmit(handleSendResetLink)}>
                <input
                  type="email"
                  placeholder="E-mail"
                  {...register('email')}
                  onClick={() => clearErrors('email')}
                />
                {errors.email && <p>{errors.email?.message}</p>}
                <ButtonDefault 
                  title="Send reset link"
                  isLoading={loading}
                />
              </form>
            </main>
          </>
        ) : (
          <>
            <h3>Check your email</h3>
            <div className="email-sent">
              <p>
                We just sent an email with password reset instructions to <strong>{email}</strong>
              </p>
            </div>
          </>
        )
      }
    </ContentForgotPasswordContainer>
  )
}