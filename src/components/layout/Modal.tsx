import { useModalStore } from '@/stores/modalStore';
import ConceptModal from '@/features/concepts/components/ConceptModal';
import UploadOptionModal from '@/features/problems/components/UploadOptionModal';

export default function Modal() {
  const { type, props, isOpen, closeModal } = useModalStore();
  if (!isOpen || !type) return null;
  switch (type) {
    case 'CONCEPT':
      if (!props) return null;
      return <ConceptModal {...props} onClose={closeModal} />;
    case 'UPLOAD_OPTION':
      return <UploadOptionModal onClose={closeModal} />;
    default:
      return null;
  }
}
