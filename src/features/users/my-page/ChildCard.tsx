import ConceptList from '@/features/concepts/components/ConceptList';
import Profile from './Profile';
import { SquarePen } from 'lucide-react';
import type { Concept } from '@/types/concept.type';
import { useModalStore } from '@/stores/modalStore';
import type { UpdateChildRequest } from '@/types/user.type';
import { getGradeLabel } from '@/utils/constants/grades';

type ChildCardProps = {
  name: string;
  grade: number;
  concepts: Omit<Concept, 'description'>[];
};

export default function ChildCard({ name, grade, concepts }: ChildCardProps) {
  const openModal = useModalStore((state) => state.openModal);
  const handleConfirm = (data: UpdateChildRequest) => {
    console.log(data);
    // 자녀 업데이트 api 관련 로직
  };
  return (
    <div className='relative w-full h-full flex flex-col items-center gap-3 bg-white dark:bg-gray6 rounded-[16px] shadow-[var(--shadow)] dark:shadow-[var(--shadow-dark)] p-4'>
      <Profile imageUrl='images/characters/yellow.svg' size='small' />
      <div className='flex flex-col items-center gap-1'>
        <p className='font-semibold'>{name}</p>
        <p className='body-sm text-gray6 dark:text-gray3'>
          {getGradeLabel(grade)}
        </p>
      </div>
      <ConceptList concepts={concepts} type='badge' />
      <SquarePen
        className='w-4 h-4 absolute right-3 top-3 stroke-gray4 dark:stroke-gray3 cursor-pointer active:scale-110 duration-300 ease-in-out'
        onClick={() =>
          openModal('CHILD_UPDATE', { name, grade, onConfirm: handleConfirm })
        }
      />
    </div>
  );
}
