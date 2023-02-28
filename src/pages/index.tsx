import Head from 'next/head'
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