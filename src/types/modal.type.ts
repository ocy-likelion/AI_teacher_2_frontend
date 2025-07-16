export interface BaseModalProps {
  onClose: () => void;
}

export type ModalPropsMap = {
  CONCEPT: { title: string; description: string };
};

export type ModalType = keyof ModalPropsMap;
