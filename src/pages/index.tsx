import { GetServerSideProps } from 'next';
import Head from 'next/head'
import { parseCookies } from 'nookies';
import { ContentHome } from '../contents/home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dev link | Home</title>
      </Head>
      <ContentHome />
    </>
  )  
}

export const getServerSideProps:GetServerSideProps = async (context) => {
  // const { ['singlelink.token']: token } = parseCookies(context);

  // if (token) {
  //   return {
  //     redirect: {
  //       destination: '/account',
  //       permanent: true,
  //     }
  //   }
  // }

  return {
    props: {},
  }
}