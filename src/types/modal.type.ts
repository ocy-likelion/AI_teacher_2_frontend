export interface BaseModalProps {
  onClose: () => void;
}

export type ModalPropsMap = {
  CONCEPT: { title: string; description: string };
  UPLOAD_OPTION: undefined;
};

export type ModalType = keyof ModalPropsMap;
