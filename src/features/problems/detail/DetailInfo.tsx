import PageTitle from '../components/PageTitle';
import SubHeader from '@/components/layout/SubHeader';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { formatDetailDate } from '@/utils/date';
import { useNavigate } from 'react-router-dom';
import ProblemActionsMenu from '../components/ProblemActionsMenu';

type DetailInfoProps = {
  id: number;
  favorite: boolean;
  date: string;
};

export default function DetailInfo({ id, favorite, date }: DetailInfoProps) {
  const navigate = useNavigate();
  const isMdUp = useMediaQuery('(min-width: 768px)');

  return (
    <>
      {isMdUp ? (
        <PageTitle>해설 보기 </PageTitle>
      ) : (
        <SubHeader type='back' title='해설 보기' />
      )}
      <div className='flex justify-between items-center p-2 md:border-b border-gray1 dark:border-gray6'>
        <p className='w-full px-2 text-right md:text-left label md:body-sm text-gray5 dark:text-gray2'>
          {formatDetailDate(date)}
        </p>
        {isMdUp && (
          <ProblemActionsMenu
            id={id}
            favorite={favorite}
            source='detail'
            onDelete={() => navigate('/history')}
          />
        )}
      </div>
    </>
  );
}
