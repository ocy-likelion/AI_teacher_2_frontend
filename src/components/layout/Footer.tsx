import { History, House, Plus } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

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
];

export default function Footer() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/problem/upload');
  };

  return (
    <footer
      className='w-full max-w-[var(--max-size-mobile)] pt-1 bg-background-light dark:bg-gray7 shadow-[var(--bottom-nav-shadow)] dark:shadow-[var(--bottom-nav-shadow-dark)] sticky bottom-0 flex items-center rounded-t-[32px]'
      style={{
        paddingBottom: 'calc(4px + var(--safe-bottom))',
        minHeight: 'calc(var(--h-header) + var(--safe-bottom))',
      }}
    >
      <nav className='w-full flex justify-between px-14 py-2'>
        {links.map((link) => (
          <Link
            key={link.title}
            to={link.to}
            className={`flex flex-col items-center justify-center gap-1 ${pathname === link.to && 'text-primary'}`}
          >
            {link.icon}
            <span className='badge'>{link.title}</span>
          </Link>
        ))}
      </nav>
      <div className='absolute left-[50%] translate-x-[-50%] bottom-7 flex flex-col justify-center items-center gap-1'>
        <button
          onClick={handleClick}
          className='text-background-light bg-gradient-to-r from-primary2 via-primary to-primary3 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer'
        >
          <Plus />
        </button>
        <span className='badge'>문제 등록</span>
      </div>
    </footer>
  );
}
