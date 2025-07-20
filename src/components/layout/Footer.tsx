import { CircleUserRound, History, House } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  {
    to: '/',
    title: '홈',
    icon: <House />,
  },
  {
    to: '/history',
    title: '해설 기록',
    icon: <History />,
  },
  {
    to: '/profile',
    title: '마이페이지',
    icon: <CircleUserRound />,
  },
];

export default function Footer() {
  const { pathname } = useLocation();

  return (
    <footer
      className='w-full max-w-[var(--max-size-mobile)] pt-1 bg-background-light dark:bg-gray7 sticky bottom-0 flex items-center border-t border-gray2 dark:border-gray6'
      style={{
        paddingBottom: 'calc(4px + var(--safe-bottom))',
        minHeight: 'calc(var(--h-header) + var(--safe-bottom))',
      }}
    >
      <nav className='w-full flex items-center justify-between px-15 py-1'>
        {links.map((link) => (
          <Link
            key={link.title}
            to={link.to}
            className={`flex flex-col items-center justify-center gap-1 text-btn-disabled ${pathname === link.to && 'text-primary'}`}
          >
            {link.icon}
            <span className='badge'>{link.title}</span>
          </Link>
        ))}
      </nav>
    </footer>
  );
}
