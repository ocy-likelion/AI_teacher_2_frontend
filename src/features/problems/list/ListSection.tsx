import { problems } from '../mock/dummy';
import GridView from './GridView';
import ListView from './ListView';

type ListSectionProps = {
  q?: string;
  favorite?: boolean;
  view: 'list' | 'grid';
};

export default function ListSection({
  q,
  favorite = false,
  view,
}: ListSectionProps) {
  return (
    <section>
      {view === 'list' ? (
        <ListView items={problems} />
      ) : (
        <GridView items={problems} />
      )}
    </section>
  );
}
