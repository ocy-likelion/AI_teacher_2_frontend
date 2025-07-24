import { Infinity } from 'lucide-react';

type ListLoadingProps = {
  description?: string;
};

export default function ListLoading({
  description = '해설을 불러오고 있어요...',
}: ListLoadingProps) {
  return (
    <div className='w-full flex flex-col items-center py-6 gap-1'>
      <Infinity className='animate-infinity text-primary w-8 h-8' />
      <p className='badge text-gray5 dark:text-gray3'>{description}</p>
    </div>
  );
}
