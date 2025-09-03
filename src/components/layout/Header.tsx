import { Link } from 'react-router-dom';
import Logo from '@/assets/images/logo/Logo_Header.svg?react';
import HeaderWrapper from '../ui/header';

export default function Header() {
  return (
    <HeaderWrapper>
      <Link to='/'>
        <Logo />
      </Link>
    </HeaderWrapper>
  );
}
