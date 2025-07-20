export interface BaseModalProps {
  onClose: () => void;
}

export type ModalPropsMap = {
  CONCEPT: { title: string; description: string };
  DELETE_CONFIRM: {
    onConfirm: () => void;
  };
};

export type ModalType = keyof ModalPropsMap;
