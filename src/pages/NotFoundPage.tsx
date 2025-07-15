import { Button } from '@/components/ui/button';
import { TriangleAlert } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <section className='w-full h-full flex flex-col justify-center items-center gap-3'>
      <TriangleAlert size={50} className='text-primary' />
      <p className='title-md'>페이지를 찾을 수 없습니다.</p>
      <Button variant='link' className='body-md' onClick={() => navigate(-1)}>
        이전 페이지로 돌아가기
      </Button>
    </section>
  );
}
