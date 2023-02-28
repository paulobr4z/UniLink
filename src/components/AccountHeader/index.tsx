import Link from 'next/link';
import { IUser } from '../../types/user';
import { Avatar } from '../Avatar';
import {
  AccountHeaderContainer,
  AccountHeaderWrapper,
} from './styles';

interface IAccountHeader {
  user?: IUser
}

export function AccountHeader({ user }: IAccountHeader) {
  return (
    <AccountHeaderContainer>
      <AccountHeaderWrapper>
        <div className="logo">
          dev.link
        </div>
        <Avatar imgURL={user?.avatar} />
      </AccountHeaderWrapper>
    </AccountHeaderContainer>
  );
}