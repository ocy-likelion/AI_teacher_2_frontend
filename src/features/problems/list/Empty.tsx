type EmptyProps = {
  description: string;
};

export default function Empty({ description }: EmptyProps) {
  return (
    <div className='flex-1 flex flex-col justify-center items-center gap-2'>
      <div className='w-full flex items-center justify-center gap-1'>
        <object
          data='/images/characters/blue.svg'
          type='image/svg+xml'
          className='w-12 h-12'
        >
          <img
            src='/images/characters/blue.svg'
            alt='파랑'
            className='w-12 h-12'
          />
        </object>
        <object
          data='/images/characters/orange_circle.svg'
          type='image/svg+xml'
          className='w-12 h-12'
        >
          <img
            src='/images/characters/orange_circle.svg'
            alt='주황'
            className='w-12 h-12'
          />
        </object>
        <object
          data='/images/characters/green.svg'
          type='image/svg+xml'
          className='w-12 h-12'
        >
          <img
            src='/images/characters/green.svg'
            alt='초록'
            className='w-12 h-12'
          />
        </object>
      </div>
      <p className='text-sm font-semibold'>{description}</p>
    </div>
  );
}
