import { GetServerSideProps } from 'next';
import Head from 'next/head'
import { parseCookies } from 'nookies';
import { ContentAccount } from '../../contents/account'

interface IAccount {
  userID: string;
}

export default function Account({ userID }: IAccount) {
  return (
    <>
      <Head>
        <title>Dev.link | Account</title>
      </Head>
      <ContentAccount userID={userID} />
    </>
  )  
}

export const getServerSideProps:GetServerSideProps = async (context) => {
  const { ['singlelink.token']: token } = parseCookies(context);
  const { ['singlelink.userID']: userID } = parseCookies(context);

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
      userID
    }
  }
}