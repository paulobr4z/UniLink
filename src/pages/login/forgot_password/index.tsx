import Head from 'next/head';
import { ContentForgotPassword } from '../../../contents/forgotPassword';

export default function ForgotPassword() {
  return (
    <>
      <Head>
        <title>UniLink | Forgot Password</title>
      </Head>
      <ContentForgotPassword />
    </>
  )  
}

// export const getServerSideProps:GetServerSideProps = async (context) => {
//   const { token } = context.query;

//   return {
//     props: {
//       token
//     }
//   }
// }