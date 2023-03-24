import { ContentHomeContainer } from "./styles";
import NavLink from 'next/link'

export function ContentHome() {
  return (
    <ContentHomeContainer>
      <header>
        <div className="logo">
          UniLink
        </div>
        <nav className="menu">
          <NavLink href='/login'>Log in</NavLink >
          <NavLink href='/signup' >Sign up</NavLink >
        </nav>
      </header>
      <main>
        <div className="main-title">
          <h1>
            Simplify your online presence.
          </h1>
          <h3>
            Connect with your audience like never before with our intuitive link management system.
          </h3>
          <NavLink href='/signup'>
            <button>
              Get Started
            </button>
          </NavLink >
        </div>
        <div className="main-ilustra">
          <img 
            src="https://raw.githubusercontent.com/paulobr4z/dev.link/810ef2ab5fdf83964aa4ba68723b4199699822b7/public/images/ilustra-main.svg"
          />
        </div>
      </main>
    </ContentHomeContainer>
  )
}