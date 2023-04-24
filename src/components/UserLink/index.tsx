import Image from 'next/image';
import React from 'react';
import {
  LinkContainer,
} from './styles';

interface ILink {
  title?: string;
  link_url?: string;
  bg_color_link?: string;
  text_color_link?: string;
  is_active?: boolean;
}

export function UserLink({
  title = "",
  link_url = "#",
  bg_color_link = '#121212',
  text_color_link = '#ffffff',
  is_active
}: ILink) {
  return (
    <>
      {
        is_active && 
          <LinkContainer
            bg_color_link={bg_color_link}
            text_color_link={text_color_link}
          >
          <a href={link_url} target="_blank" rel="noopener noreferrer">
            <p>{title}</p>
          </a>
        </LinkContainer>
      }
    </>
  );
}