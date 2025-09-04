import { navLinks } from '@/utils/constants/nav-links';
import { Link, useLocation } from 'react-router-dom';
import Logo from '@/assets/images/logo/Logo_Img_noBg.svg?react';

export default function Sidebar() {
  const { pathname } = useLocation();

  return (
    <aside className='w-sidebar-width hidden md:flex flex-col gap-4 p-2 bg-background-light dark:bg-background-dark rounded-[12px]'>
      <Link to='/' className='flex gap-2 items-center'>
        <Logo width={48} height={48} />
        <span className='text-3xl font-semibold text-primary'>일타</span>
      </Link>
      <nav className='w-full flex flex-col gap-3'>
        {navLinks.map(({ title, to, icon: Icon }) => (
          <Link
            key={title}
            to={to}
            className={`p-2 flex-1 flex items-center gap-2 rounded-[8px] hover:bg-gray1 hover:dark:bg-background-dark-secondary ${pathname === to ? 'text-background-dark dark:text-background-light' : ' text-gray4'}`}
          >
            <Icon />
            <span className='body-lg'>{title}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
