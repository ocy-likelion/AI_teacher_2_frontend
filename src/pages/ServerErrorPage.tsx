import { Button } from '@/components/ui/button';
import { ServerCrash } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ServerErrorPage() {
  const navigate = useNavigate();

  return (
    <section className='w-full h-full flex flex-col justify-center items-center gap-5'>
      <ServerCrash size={50} className='text-primary' />
      <h2 className='title-md'>일시적으로 오류가 발생했어요.</h2>
      <div className='flex flex-col'>
        <p className='text-gray5 dark:text-gray3 font-semibold'>
          잠시 후 다시 시도해주세요.
        </p>
        <Button
          variant='link'
          className='body-sm'
          size='sm_link'
          onClick={() => navigate(-1)}
        >
          이전 페이지로 돌아가기
        </Button>
      </div>
    </section>
  );
}
