import { useModalStore } from '@/stores/modalStore';
import { useDeleteProblem } from '../api/delete-problem';
import { useToggleFavorite } from '../api/toggle-favorite';
import type { FavoriteToggleSource } from '@/types/problem.type';

export const useProblemActions = (id: number, source: FavoriteToggleSource) => {
  const { mutate: deleteProblem, isPending: isDeleting } = useDeleteProblem();
  const { toggle } = useToggleFavorite(source);
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
