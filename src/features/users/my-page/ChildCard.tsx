import ConceptList from '@/features/concepts/components/ConceptList';
import Profile from './Profile';
import { SquarePen } from 'lucide-react';

const concepts = [
  {
    id: 1,
    name: '원',
  },
  {
    id: 2,
    name: '원의 넓이',
  },
];

export default function ChildCard() {
  return (
    <div className='relative w-full h-full flex flex-col items-center gap-3 bg-white dark:bg-gray6 rounded-[16px] shadow-[var(--shadow)] dark:shadow-[var(--shadow-dark)] p-4'>
      <Profile imageUrl='images/characters/yellow.svg' size='small' />
      <div className='flex flex-col items-center gap-1'>
        <p className='font-semibold'>자녀 이름</p>
        <p className='body-sm text-gray6 dark:text-gray3'>자녀 학년</p>
      </div>
      <ConceptList concepts={concepts} type='badge' />
      <SquarePen className='w-4 h-4 absolute right-3 top-3 stroke-gray4 dark:stroke-gray3 cursor-pointer active:scale-110 duration-300 ease-in-out' />
    </div>
  );
}
