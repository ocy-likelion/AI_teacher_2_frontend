import { useModalStore } from '@/stores/modalStore';
import ConceptModal from '@/features/concepts/components/ConceptModal';
import UploadOptionModal from '@/features/problems/components/UploadOptionModal';
import DeleteConfirmModal from '@/components/ui/DeleteConfirmModal';
import type { ModalPropsMap } from '@/types/modal.type';

export default function Modal() {
  const { type, props, isOpen, closeModal } = useModalStore();
  if (!isOpen || !type) return null;
  switch (type) {
    case 'CONCEPT':
      if (!props) return null;
      return (
        <ConceptModal
          {...(props as ModalPropsMap['CONCEPT'])}
          onClose={closeModal}
        />
      );
    case 'UPLOAD_OPTION':
      return <UploadOptionModal onClose={closeModal} />;
    case 'DELETE_CONFIRM':
      if (!props) return null;
      return (
        <DeleteConfirmModal
          {...(props as ModalPropsMap['DELETE_CONFIRM'])}
          onClose={closeModal}
        />
      );
    default:
      return null;
  }
}
