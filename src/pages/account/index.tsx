import { GetServerSideProps } from 'next';
import Head from 'next/head'
import { parseCookies } from 'nookies';
import { ContentAccount } from '../../contents/account'

interface IAccount {
  host: string
}

export default function Account({ host }: IAccount) {
  return (
    <>
      <Head>
        <title>UniLink | Account</title>
      </Head>
      <ContentAccount host={host} />
    </>
  )  
}

export const getServerSideProps:GetServerSideProps = async (context) => {
  const { ['singlelink.token']: token } = parseCookies(context);
  const { req } = context;

  console.log('serve', req.headers.host)

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }

  return {
    props: {
      host: req.headers.host
    }
  }
}