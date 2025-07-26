import { Link } from 'react-router-dom';
import Logo from '@/assets/images/logo.svg?react';

export default function Header() {
  return (
    <header
      className='z-20 bg-background-light dark:bg-gray7 sticky top-0 flex items-center px-4 pb-2'
      style={{
        paddingTop: 'calc(8px + var(--safe-top))',
        minHeight: 'calc(var(--h-header) + var(--safe-top))',
      }}
    >
      <Link to='/'>
        <Logo />
      </Link>
    </header>
  );
}
