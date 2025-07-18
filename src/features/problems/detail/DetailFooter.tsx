import { Button } from '@/components/ui/button';
import { Bookmark } from 'lucide-react';
import { useDeleteProblem } from '../api/delete-problem';
import { useNavigate } from 'react-router-dom';
import { useModalStore } from '@/stores/modalStore';

type DetailFooterProps = {
  id: string;
  isFavorite: boolean;
};

export default function DetailFooter({ id, isFavorite }: DetailFooterProps) {
  const { mutate: deleteProblem, isPending: isDeleting } = useDeleteProblem();
  const navigate = useNavigate();
  const openModal = useModalStore((state) => state.openModal);

  const handleDelete = () => {
    deleteProblem(id, {
      onSuccess: () => {
        navigate('/history');
      },
    });
  };

  const handleDeleteClick = () => {
    openModal('DELETE_CONFIRM', { onConfirm: handleDelete });
  };

  return (
    <footer
      className='w-full max-w-[var(--max-size-mobile)] pt-1 bg-background-light dark:bg-gray7 sticky bottom-0 flex justify-center items-center border-t border-gray2 dark:border-gray6'
      style={{
        paddingBottom: 'calc(4px + var(--safe-bottom))',
        minHeight: 'calc(var(--h-header) + var(--safe-bottom))',
      }}
    >
      <div className='w-full py-2.5 px-6 flex items-center gap-3'>
        <Button
          variant='border'
          size='full'
          className='flex-1 text-md font-semibold'
        >
          <Bookmark
            className='size-[20px]'
            stroke='currentColor'
            fill={isFavorite ? 'currentColor' : 'none'}
          />
          {isFavorite ? '해제하기' : '저장하기'}
        </Button>
        <Button
          onClick={handleDeleteClick}
          variant={`${isDeleting ? 'disabled' : 'default'}`}
          size='full'
          className='flex-1 text-md font-semibold'
        >
          삭제하기
        </Button>
      </div>
    </footer>
  );
}
