import { useModalStore } from '@/stores/modalStore';
import type { Concept } from '@/types/concept.type';

type ConceptListProps = {
  concepts: Omit<Concept, 'description'>[];
};

export default function ConceptList({ concepts }: ConceptListProps) {
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
          # {concept.name}
        </li>
      ))}
    </ul>
  );
}
