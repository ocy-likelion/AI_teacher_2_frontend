export default function ImageUpload() {
  return (
    <input
      type='file'
      accept='image/*'
      capture='environment'
      className='hidden'
    />
  );
}
