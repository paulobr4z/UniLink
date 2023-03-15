import Link from "next/link";
import { SignOut } from "phosphor-react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { IUser } from '../../types/user';
import {
  AccountHeaderContainer,
  AccountHeaderWrapper,
} from './styles';

interface IAccountHeader {
  user?: IUser
}

export function AccountHeader({ user }: IAccountHeader) {
  const { signOut } = useContext(AuthContext);

  return (
    <AccountHeaderContainer>
      <AccountHeaderWrapper>
        <div className="logo">
          <Link href="/">
            UniLink
          </Link>
        </div>
        <span className="sign-out" onClick={signOut}>
          <p>log out</p>
          <SignOut size={24} />
        </span>
      </AccountHeaderWrapper>
    </AccountHeaderContainer>
  );
}