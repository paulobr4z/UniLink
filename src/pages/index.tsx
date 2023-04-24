import { GetServerSideProps } from 'next';
import Head from 'next/head'
import { ContentHome } from '../contents/home'
import { useEffect } from 'react';
import { startServer } from '../services';

export default function Home() {
  
  useEffect(() => {
    async function onStartServer() {
      try {
        const response = await startServer();
        console.log(response);
      } catch (error) {
        console.log("try again later");        
      }
    }

    onStartServer();
  }, [])

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