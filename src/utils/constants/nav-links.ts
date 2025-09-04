import { House, History, CircleUserRound } from 'lucide-react';
import { type ComponentType } from 'react';

type NavLink = {
  to: string;
  title: string;
  icon: ComponentType;
};

export const navLinks: NavLink[] = [
  {
    to: '/',
    title: '홈',
    icon: House,
  },
  {
    to: '/history',
    title: '해설 기록',
    icon: History,
  },
  {
    to: '/profile',
    title: '마이페이지',
    icon: CircleUserRound,
  },
];
