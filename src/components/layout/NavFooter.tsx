import { CircleUserRound, History, House } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import FooterWrapper from '@/components/ui/footer';

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

export default function NavFooter() {
  const { pathname } = useLocation();

  return (
    <FooterWrapper>
      <nav className='w-full flex items-center gap-2 px-8 py-1'>
        {links.map((link) => (
          <Link
            key={link.title}
            to={link.to}
            className={`flex-1 flex flex-col items-center justify-center gap-1 text-btn-disabled ${pathname === link.to && 'text-primary'}`}
          >
            {link.icon}
            <span className='badge'>{link.title}</span>
          </Link>
        ))}
      </nav>
    </FooterWrapper>
  );
}
