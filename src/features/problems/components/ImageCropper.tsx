import { useRef } from 'react';
import Cropper, { type ReactCropperElement } from 'react-cropper';
import 'cropperjs/dist/cropper.css';

// export default function ImageCropper({ image }: { image: File }) {
export default function ImageCropper() {
  const cropperRef = useRef<ReactCropperElement>(null);

  // useEffect(() => { // TODO: 구현 예정
  //   const deployImage = () => {
  //     if (image && image.length > 0) {
  //       const reader = new FileReader();
  //       reader.onload = () => {
  //         set;
  //       };
  //     }
  //   };
  // });

  // const getCropData = () => { // TODO: 구현 예정
  //   const cropper = cropperRef.current?.cropper;
  //   if (cropper) {
  //     const croppedImage = cropper.getCroppedCanvas().toDataURL();
  //     console.log('Cropped Image', croppedImage);
  //   }
  // };

  return (
    <div className='h-full w-full '>
      <Cropper
        className='h-full w-full'
        src='/images/Sample-Image.svg'
        initialAspectRatio={1}
        guides={true}
        ref={cropperRef}
        // viewMode={1}
        dragMode='move'
        responsive={true}
        background={false}
        checkOrientation={false}
        autoCropArea={1}
        // cropBoxMovable={false}
      />
      {/* <button onClick={getCropData}>크롭하기</button> */}
    </div>
  );
}
