import { GetServerSideProps } from 'next';
import Head from 'next/head'
import { ContentHome } from '../contents/home'

export default function Home() {
  return (
    <>
      <Head>
        <title>UniLink | Home</title>
      </Head>
      <ContentHome />
    </>
  )  
}

export const getServerSideProps:GetServerSideProps = async (context) => {
  return {
    props: {},
  }
}