import ConceptList from '@/features/concepts/components/ConceptList';
import Profile from './Profile';
import { SquarePen } from 'lucide-react';
import type { Concept } from '@/types/concept.type';
import { useModalStore } from '@/stores/modalStore';
import type { Child } from '@/types/user.type';
import { getGradeLabel } from '@/utils/constants/grades';
import { useUpdateChildInfo } from '../api/update-child-info';

type ChildCardProps = {
  name: string;
  grade: number;
  concepts: Omit<Concept, 'description'>[];
};

export default function ChildCard({ name, grade, concepts }: ChildCardProps) {
  const { mutate: updateChild, isPending: isUpdating } = useUpdateChildInfo();
  const openModal = useModalStore((state) => state.openModal);
  const handleConfirm = (data: Child) => {
    updateChild(data);
  };

  return (
    <div className='relative max-w-[500px] w-full h-full flex flex-col items-center gap-3 bg-white dark:bg-gray6 rounded-[16px] shadow-[var(--shadow)] dark:shadow-[var(--shadow-dark)] p-4'>
      <Profile size='small' />
      <div className='flex flex-col items-center gap-1'>
        <p className='font-semibold'>{name || '아직 등록된 자녀가 없어요.'}</p>
        <p className='body-sm text-gray6 dark:text-gray3'>
          {getGradeLabel(grade)}
        </p>
      </div>
      <ConceptList concepts={concepts} type='badge' />
      <SquarePen
        className='w-4 h-4 absolute right-3 top-3 stroke-gray4 dark:stroke-gray3 cursor-pointer active:scale-110 duration-300 ease-in-out'
        onClick={() =>
          openModal('CHILD_UPDATE', {
            name,
            grade,
            isUpdating,
            onConfirm: handleConfirm,
          })
        }
      />
    </div>
  );
}
