import { useModalStore } from '@/stores/modalStore';
import ConceptModal from '@/features/concepts/components/ConceptModal';
import DeleteConfirmModal from '@/components/DeleteConfirmModal';
import type { ModalPropsMap } from '@/types/modal.type';
import ChildUpdateModal from '@/features/users/my-page/ChildUpdateModal';

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
    case 'DELETE_CONFIRM':
      if (!props) return null;
      return (
        <DeleteConfirmModal
          {...(props as ModalPropsMap['DELETE_CONFIRM'])}
          onClose={closeModal}
        />
      );
    case 'CHILD_UPDATE':
      if (!props) return null;
      return (
        <ChildUpdateModal
          {...(props as ModalPropsMap['CHILD_UPDATE'])}
          onClose={closeModal}
        />
      );
    default:
      return null;
  }
}
