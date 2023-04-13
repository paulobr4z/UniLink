import { GetServerSideProps } from 'next';
import Head from 'next/head'
import { parseCookies } from 'nookies';
import { ContentLogin } from '../../contents/login'

export default function Login() {
  return (
    <>
      <Head>
        <title>UniLink | Sign in</title>
      </Head>
      <ContentLogin />
    </>
  )  
}

export const getServerSideProps:GetServerSideProps = async (context) => {
  const { ['singlelink.token']: token } = parseCookies(context);

  if (token) {
    return {
      props: {},
      redirect: {
        destination: '/account',
      }
    }
  }

  return {
    props: {}
  }
}