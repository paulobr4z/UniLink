import { ContentHomeContainer } from "./styles";
import Image from "next/image";
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
      <main>
        <div className="main-title">
          <h1>
            Everything you are. In one, simple link in bio.
          </h1>
          <button>
            Get Started
          </button>
        </div>
        <div className="main-ilustra">
          <Image src='' alt="ilustration" width={200} height={200} />
        </div>
      </main>
    </ContentHomeContainer>
  )
}