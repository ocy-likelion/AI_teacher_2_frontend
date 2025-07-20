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
    <div className='h-full w-full '>
      <Cropper
        className='h-full w-full'
        src={image}
        initialAspectRatio={1}
        guides={true}
        ref={cropperRef}
        dragMode='move'
        responsive={true}
        background={false}
        checkOrientation={false}
        autoCropArea={1}
      />
    </div>
  );
}
