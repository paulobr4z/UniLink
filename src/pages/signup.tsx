import Head from 'next/head'
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { ContentSignup } from '../contents/signup';


export default function Signup() {
  return (
    <>
      <Head>
        <title>UniLink | Signup</title>
      </Head>
      <ContentSignup />
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