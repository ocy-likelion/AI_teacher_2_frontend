import { Button } from '@/components/ui/button';
import { Bookmark } from 'lucide-react';

type DetailFooterProps = {
  isFavorite: boolean;
};

export default function DetailFooter({ isFavorite }: DetailFooterProps) {
  return (
    <footer
      className='w-full max-w-[var(--max-size-mobile)] pt-1 bg-background-light dark:bg-gray7 shadow-[var(--bottom-nav-shadow)] dark:shadow-[var(--bottom-nav-shadow-dark)] sticky bottom-0 flex justify-center items-center rounded-t-[32px]'
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
          variant='default'
          size='full'
          className='flex-1 text-md font-semibold'
        >
          삭제하기
        </Button>
      </div>
    </footer>
  );
}
