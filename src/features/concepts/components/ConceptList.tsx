import { Badge } from '@/components/ui/badge';
import { useModalStore } from '@/stores/modalStore';
import type { Concept } from '@/types/concept.type';

type ConceptListProps = {
  concepts: Omit<Concept, 'description'>[];
  type?: 'default' | 'badge';
};

export default function ConceptList({
  concepts,
  type = 'default',
}: ConceptListProps) {
  const { openModal } = useModalStore();
  return (
    <ul className='flex items-center flex-wrap gap-x-2 gap-y-0.5'>
      {concepts.map((concept) => (
        <li
          key={concept.id}
          className='text-primary cursor-pointer'
          onClick={() =>
            openModal('CONCEPT', {
              title: concept.name,
              description: 'description',
            })
          }
        >
          {type === 'badge' ? (
            <Badge className='active:scale-105 transition-all  duration-300 ease-in-out'>
              # {concept.name}
            </Badge>
          ) : (
            `# ${concept.name}`
          )}
        </li>
      ))}
    </ul>
  );
}
