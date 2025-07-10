import { Info } from 'lucide-react';

type EmptyProps = {
  description: string;
};

export default function Empty({ description }: EmptyProps) {
  return (
    <div className='flex-1 flex flex-col justify-center items-center gap-2'>
      <Info size={30} />
      <p className='text-sm font-semibold'>{description}</p>
    </div>
  );
}
