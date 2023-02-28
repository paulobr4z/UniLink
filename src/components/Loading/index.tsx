import Image from 'next/image';
import React from 'react';
import {
  LoadingContainer,
} from './styles';

interface ILoading {
  isLoading?: boolean;
}

export function Loading({
  isLoading
}: ILoading) {
  return (
    <LoadingContainer isLoading={isLoading}>
      <span />
    </LoadingContainer>
  );
}