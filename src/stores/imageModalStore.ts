import { create } from 'zustand';

type ImageModalStore = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export const useImageModalStore = create<ImageModalStore>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));
