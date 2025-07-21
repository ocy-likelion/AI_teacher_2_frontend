import type { UpdateChildRequest } from './user.type';

export interface BaseModalProps {
  onClose: () => void;
}

export type ModalPropsMap = {
  CONCEPT: { title: string; description: string };
  DELETE_CONFIRM: {
    onConfirm: () => void;
  };
  CHILD_UPDATE: {
    name: string;
    grade: number;
    isUpdating: boolean;
    onConfirm: (data: UpdateChildRequest) => void;
  };
};

export type ModalType = keyof ModalPropsMap;
