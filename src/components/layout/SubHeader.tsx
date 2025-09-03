import { ChevronLeft, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import HeaderWrapper from '../ui/header';

type SubHeaderProps = {
  type: 'close' | 'back';
  title: string;
  childConfirm?: boolean;
  onBackClick?: () => void;
};

export default function SubHeader({
  type,
  title,
  childConfirm = false,
  onBackClick,
}: SubHeaderProps) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (!onBackClick) navigate(-1);
    else onBackClick();
  };

  return (
    <HeaderWrapper
      className={`${childConfirm ? 'bg-none' : 'bg-background-light dark:bg-gray7'} sticky top-0 flex justify-center items-center px-4 pb-2 md:hidden`}
    >
      <button className='absolute left-4 cursor-pointer' onClick={handleClick}>
        {type === 'close' ? <X /> : <ChevronLeft />}
      </button>
      <span className='title-md'>{title}</span>
    </HeaderWrapper>
  );
}
