import Link from 'next/link';
import {
  HeaderDefaultContainer,
} from './styles';

export function HeaderDefault() {
  return (
    <HeaderDefaultContainer>
      <div className="header-default-wrapper">
        <div className="logo">
          <Link href="/">
            <img src="/images/icon.svg" alt="logo" />
          </Link>
          <Link href="/">
            UniLink
          </Link>
        </div>
      </div>
    </HeaderDefaultContainer>
  );
}