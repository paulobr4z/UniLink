import Link from "next/link";
import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ContentLoginContainer } from "./styles";

export function ContentLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useContext(AuthContext);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    const data = {
      email,
      password
    }

    await signIn(data);
  }
  return (
    <ContentLoginContainer>
      <div className="login-wrapper">
        <h1>Sign in</h1>
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
          <button type='submit'>
            login
          </button>
        </form>
        <p>Don&apos;t have an account? <Link href="/signup">Sign up.</Link></p>
      </div>
    </ContentLoginContainer>
  )
}