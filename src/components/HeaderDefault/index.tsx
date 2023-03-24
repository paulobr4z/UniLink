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
            UniLink
          </Link>
        </div>
      </div>
    </HeaderDefaultContainer>
  );
}