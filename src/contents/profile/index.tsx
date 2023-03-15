import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import { Avatar } from '../../components/Avatar';
import { UserLink } from '../../components/UserLink';
import { IUser } from '../../types/user';

import { 
  ProfileBio,
  ProfileContainer,
  ProfileContent,
  ProfileLinks,
  ProfileNotFound,
  ProfileTitle
} from './styles';
import { Loading } from '../../components/Loading';
import { getUserByUsername } from '../../services';

interface IContentProfile {
  username: string
}

export function ContentProfile({
  username
}: IContentProfile) {
  const [user, setUser] = useState<IUser>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function onGetUserByUsername() {
      const user = await getUserByUsername(username);
      setUser(user);
      setIsLoading(false);
    }

    onGetUserByUsername();
  }, [])

  return (
    <ProfileContainer bgColor={user?.bg_color}>
      <Loading isLoading={isLoading} />
      {
        user ? (
          <ProfileContent>
            <Avatar width={96} height={96} />
            <ProfileTitle>@{user.username}</ProfileTitle>
            <ProfileBio>{user.bio}</ProfileBio>
            <ProfileLinks>
              {user?.links?.map((link, index) => (
                <UserLink
                  key={link.title + index}
                  title={link.title}
                  link_url={link.url}
                  is_active={link.is_active}
                />
              ))}
            </ProfileLinks>
          </ProfileContent>
        ) : (
          <ProfileNotFound>
            No account associated with <strong>{username}</strong>.
          </ProfileNotFound>
        )
      }
      <h2>
        <Link 
          href='/'
        >
          UniLink
        </Link>
      </h2>
    </ProfileContainer>
  );
}