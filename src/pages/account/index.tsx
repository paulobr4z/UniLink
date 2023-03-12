import { GetServerSideProps } from 'next';
import Head from 'next/head'
import { parseCookies } from 'nookies';
import { ContentAccount } from '../../contents/account'

export default function Account() {
  return (
    <>
      <Head>
        <title>Dev.link | Account</title>
      </Head>
      <ContentAccount />
    </>
  )  
}

export const getServerSideProps:GetServerSideProps = async (context) => {
  const { ['singlelink.token']: token } = parseCookies(context);

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}