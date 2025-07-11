import { useSearchParams } from 'react-router-dom';
import { problems } from '../mock/dummy';
import Empty from './Empty';
import GridView from './GridView';
import ListView from './ListView';

export default function ListSection() {
  const [params] = useSearchParams();

  const q = params.get('q') ?? '';
  const favorite = params.get('favorite') === 'true';
  const view = (params.get('view') as 'list' | 'grid') ?? 'list';

  if (problems.length === 0) {
    return <Empty description='하단의 버튼을 눌러 문제를 등록해보세요' />;
  }

  return (
    <section className='w-full'>
      {view === 'list' ? (
        <ListView items={problems} />
      ) : (
        <GridView items={problems} />
      )}
    </section>
  );
}
