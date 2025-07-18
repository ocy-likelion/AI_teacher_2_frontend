import { create } from 'zustand';

export type imageStore = {
  imageFile: File | undefined;
  setImageFile: (file: File | undefined) => void;
};

export const useImageStore = create<imageStore>((set) => ({
  imageFile: undefined,
  setImageFile: (file) => set({ imageFile: file }),
}));
