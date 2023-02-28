import Head from 'next/head';
import { ContentProfile } from '../contents/profile';

interface IProfile {
  username: string
}

export default function Profile({ username }: IProfile) {

  return (
    <>
      <Head>
        <title>{username}</title>
      </Head>
      <ContentProfile username={username} />
    </>

  )
}

export async function getServerSideProps(context: any) {
  const { username } = context.query;

  return {
    props: {
      username
    }, 
  }
}