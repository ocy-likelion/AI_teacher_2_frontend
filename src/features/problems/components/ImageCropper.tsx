import { type RefObject } from 'react';
import Cropper, { type ReactCropperElement } from 'react-cropper';
import 'cropperjs/dist/cropper.css';

export default function ImageCropper({
  image,
  cropperRef,
}: {
  image: string | undefined;
  cropperRef: RefObject<ReactCropperElement | null>;
}) {
  return (
    <section className='flex justify-center w-full max-h-[40vh] aspect-square bg-black mb-10'>
      <Cropper
        className='h-full w-full'
        src={image}
        initialAspectRatio={1}
        aspectRatio={NaN}
        guides={true}
        ref={cropperRef}
        dragMode='move'
        responsive={true}
        background={false}
        checkOrientation={false}
        viewMode={1}
        autoCropArea={1}
        ready={() => {
          const cropper = cropperRef.current?.cropper;
          const imageData = cropper?.getImageData();

          cropper?.setData({
            x: 0,
            y: 0,
            width: imageData?.naturalWidth,
            height: imageData?.naturalHeight,
          });
        }}
      />
    </section>
  );
}
