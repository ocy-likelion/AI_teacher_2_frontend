import type { ModalPropsMap, ModalType } from '@/types/modal.type';
import { create } from 'zustand';

type ModalState = {
  type: ModalType | null;
  props: ModalPropsMap[ModalType] | null;
  isOpen: boolean;
  openModal: <T extends ModalType>(type: T, props: ModalPropsMap[T]) => void;
  closeModal: () => void;
};

export const useModalStore = create<ModalState>((set) => ({
  type: null,
  props: null,
  isOpen: false,
  openModal: (type, props) => set({ type, props, isOpen: true }),
  closeModal: () => set({ type: null, props: null, isOpen: false }),
}));
