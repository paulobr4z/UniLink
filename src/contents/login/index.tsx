import Link from "next/link";
import { FormEvent, useContext, useState } from "react";
import { ButtonDefault } from "../../components/ButtonDefault";
import { AuthContext } from "../../contexts/AuthContext";
import { ContentLoginContainer } from "./styles";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function ContentLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { signIn } = useContext(AuthContext);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    
    const data = {
      email,
      password
    }

    try {
      await signIn(data);      
    } catch (error) {
      const { message } = error as { message: string }
      toast.error(`${message}`);
      setIsLoading(false);
    }    
  }

  return (
    <ContentLoginContainer>
      <ToastContainer position="top-right" />
      <div className="login-wrapper">
        <h1>Welcome back!</h1>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="E-mail"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <ButtonDefault
            title="login"
            type="submit"
            isLoading={isLoading}
          />
        </form>
        <p>Don&apos;t have an account? <Link href="/signup">Sign up.</Link></p>
      </div>
    </ContentLoginContainer>
  )
}