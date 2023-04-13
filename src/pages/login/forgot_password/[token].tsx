import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { validateToken } from '../../../services';

interface IForgotPassword {
  token: string;
}

export default function ForgotPasswordToken({ token }:IForgotPassword) {
  const [isValid, setIsValid] = useState<null | boolean>(null);
  const [message, setMessage] = useState("wait checking");

  useEffect(() => {
    async function onValidateToken() {
      if (token) {
        try {
          await validateToken(token);
          // Router.push("/account")
        } catch (error) {
          setIsValid(false);
          setMessage("Error, try again!")
        }      
      }
    }

    onValidateToken();
  }, [])

  return (
    <>
      <Head>
        <title>UniLink | Forgot Password Check</title>
      </Head>
      <h1>{message}</h1>
    </>
  )  
}

export const getServerSideProps:GetServerSideProps = async (context) => {
  const { token } = context.query;

  return {
    props: {
      token
    }
  }
}