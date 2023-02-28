import Head from 'next/head'
import { ContentSignup } from '../contents/signup'

export default function Signup() {
  return (
    <>
      <Head>
        <title>Dev.link | Signup</title>
      </Head>
      <ContentSignup />
    </>
  )  
}