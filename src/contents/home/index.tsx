import { ContentHomeContainer } from "./styles";
import NavLink from 'next/link'

export function ContentHome() {
  return (
    <ContentHomeContainer>
      <header>
        <div className="logo">
          dev.link
        </div>
        <nav className="menu">
          <NavLink href='/login'>Sign in</NavLink >
          <NavLink href='/signup' >Sign up</NavLink >
        </nav>
      </header>
    </ContentHomeContainer>
  )
}