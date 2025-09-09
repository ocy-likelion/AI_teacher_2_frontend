import { useModalStore } from '@/stores/modalStore';
import { useDeleteProblem } from '../api/delete-problem';
import { useToggleFavorite } from '../api/toggle-favorite';

export const useProblemActions = (id: number) => {
  const { mutate: deleteProblem, isPending: isDeleting } = useDeleteProblem();
  const { toggle } = useToggleFavorite();
  const openModal = useModalStore((state) => state.openModal);

  const handleDelete = (onDelete?: () => void) => {
    deleteProblem(id, {
      onSuccess: onDelete,
    });
  };

  const handleDeleteClick = (onDelete?: () => void) => {
    openModal('DELETE_CONFIRM', { onConfirm: () => handleDelete(onDelete) });
  };

  const handleFavoriteClick = () => {
    toggle(id);
  };

  return { isDeleting, handleDeleteClick, handleFavoriteClick };
};
