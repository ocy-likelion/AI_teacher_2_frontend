import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export type imageStore = {
  imageUrl: string | undefined;
  setImageFile: (file: File | undefined) => void;
};

const useImageStore = create<imageStore>()(
  persist(
    (set) => ({
      imageUrl: undefined,
      setImageFile: (imageFile) => {
        if (imageFile) {
          const url = URL.createObjectURL(imageFile);
          set({ imageUrl: url });
        } else {
          set({ imageUrl: undefined });
        }
      },
    }),
    { name: 'image', storage: createJSONStorage(() => sessionStorage) }
  )
);

export default useImageStore;
