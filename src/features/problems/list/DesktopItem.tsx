import type { Problem } from '@/types/problem.type';
import { Link } from 'react-router-dom';
import ImageSection from '../components/ImageSection';
import CardWrapper from '../components/CardWrapper';
import Title from '../components/Title';
import { formatListDate } from '@/utils/date';
import ProblemActionsMenu from '../components/ProblemActionsMenu';

type DesktopItemProps = {
  item: Problem;
};

export default function DesktopItem({ item }: DesktopItemProps) {
  return (
    <Link to={`/problem/${item.id}`} className='w-full'>
      <CardWrapper>
        <div className='w-full flex justify-between items-start'>
          <div className='w-full flex items-center gap-6'>
            <ImageSection
              url={item.imageUrl}
              alt={item.summary}
              width={120}
              border={true}
            />
            <div className='w-full flex flex-col gap-2'>
              <Title size='md' isMarkdown={true}>
                {item.summary}
              </Title>
              <p className='body-sm md:body-md text-gray5 dark:text-gray2 overflow-hidden text-ellipsis whitespace-wrap line-clamp-1'>
                {item.concepts.map((concept) => (
                  <span key={concept.id} className='ml-1'>
                    #{concept.name}
                  </span>
                ))}
              </p>
              <p className='label md:font-medium md:body-sm text-gray5 dark:text-gray2'>
                {formatListDate(item.activatedAt)}
              </p>
            </div>
          </div>
          <ProblemActionsMenu id={item.id} favorite={item.favorite} />
        </div>
      </CardWrapper>
    </Link>
  );
}
