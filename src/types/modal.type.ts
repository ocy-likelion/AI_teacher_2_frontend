export interface BaseModalProps {
  onClose: () => void;
}

export type ModalPropsMap = {
  CONCEPT: { title: string; description: string };
  UPLOAD_OPTION: undefined;
  DELETE_CONFIRM: {
    onConfirm: () => void;
  };
};

export type ModalType = keyof ModalPropsMap;
