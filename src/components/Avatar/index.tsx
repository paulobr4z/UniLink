import Image from 'next/image';
import React from 'react';
import { AvatarContainer } from './styles';

interface IAvatar {
  imgURL: any
}

import blankImg from '../../../public/images/blank-profile-picture.png'

export function Avatar({
  imgURL,
}: IAvatar) {
  return (
    <AvatarContainer>
      <Image src={imgURL ? imgURL : blankImg} width={96} height={96} alt="avatar" />      
    </AvatarContainer>
  );
}