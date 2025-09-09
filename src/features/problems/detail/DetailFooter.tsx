import { Button } from '@/components/ui/button';
import { Bookmark } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/ui/footer';
import { useProblemActions } from '../hooks/useProblemActions';

type DetailFooterProps = {
  id: number;
  isFavorite: boolean;
};

export default function DetailFooter({ id, isFavorite }: DetailFooterProps) {
  const navigate = useNavigate();
  const { isDeleting, handleDeleteClick, handleFavoriteClick } =
    useProblemActions(id);

  const handleDelete = () => {
    handleDeleteClick(() => navigate('/history'));
  };

  return (
    <Footer>
      <div className='w-full py-2.5 px-6 flex items-center gap-3'>
        <Button
          variant='border'
          size='full'
          className='flex-1 text-md font-semibold'
          onClick={handleFavoriteClick}
        >
          <Bookmark
            className='size-[20px]'
            stroke='currentColor'
            fill={isFavorite ? 'currentColor' : 'none'}
          />
          {isFavorite ? '해제하기' : '저장하기'}
        </Button>
        <Button
          onClick={handleDelete}
          variant={`${isDeleting ? 'disabled' : 'default'}`}
          size='full'
          className='flex-1 text-md font-semibold'
        >
          삭제하기
        </Button>
      </div>
    </Footer>
  );
}
