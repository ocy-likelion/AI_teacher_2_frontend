import { useModalStore } from '@/stores/modalStore';
import ConceptModal from '@/features/concepts/components/ConceptModal';

export default function Modal() {
  const { type, props, isOpen, closeModal } = useModalStore();

  if (!isOpen || !type || !props) return null;
  switch (type) {
    case 'CONCEPT':
      return <ConceptModal {...props} onClose={closeModal} />;
    default:
      return null;
  }
}
