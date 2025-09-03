import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '@/utils/constants/nav-links';

export default function NavFooter() {
  const { pathname } = useLocation();

  return (
    <nav className='w-full flex items-center gap-2 px-8 py-1'>
      {navLinks.map(({ title, to, icon: Icon }) => (
        <Link
          key={title}
          to={to}
          className={`flex-1 flex flex-col items-center justify-center gap-1 text-btn-disabled ${pathname === to && 'text-primary'}`}
        >
          <Icon />
          <span className='badge'>{title}</span>
        </Link>
      ))}
    </nav>
  );
}
