import { create } from 'zustand';

export type image = File | null;

export type imageStore = {
  imageFile: File | undefined;
  imageUrl: string | undefined;

  setImageFile: (file: File | undefined) => void;
};

const useImageStore = create<imageStore>()((set) => ({
  imageFile: undefined,
  imageUrl: undefined,
  setImageFile: (imageFile) => {
    if (imageFile) {
      const url = URL.createObjectURL(imageFile);
      set({ imageFile: imageFile, imageUrl: url });
    } else {
      set({ imageFile: undefined, imageUrl: undefined });
    }
  },
}));

export default useImageStore;
