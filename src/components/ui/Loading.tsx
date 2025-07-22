type LoadingProps = {
  description?: string;
};

export default function Loading({
  description = '조금만 기다려주세요.',
}: LoadingProps) {
  return (
    <div className='h-full flex flex-col justify-center items-center gap-3'>
      <div className='w-full flex items-center justify-center gap-4'>
        <object
          data='/images/characters/orange_triangle.svg'
          type='image/svg+xml'
          className='w-12 h-12 animate-pop delay-0'
        >
          <img
            src='/images/characters/orange_triangle.svg'
            alt='orange_triangle'
            className='w-12 h-12 animate-pop delay-0'
          />
        </object>
        <object
          data='/images/characters/green.svg'
          type='image/svg+xml'
          className='w-12 h-12 animate-pop delay-200'
        >
          <img
            src='/images/characters/green.svg'
            alt='초록'
            className='w-12 h-12 animate-pop delay-200'
          />
        </object>
        <object
          data='/images/characters/orange_circle.svg'
          type='image/svg+xml'
          className='w-12 h-12 animate-pop delay-400'
        >
          <img
            src='/images/characters/orange_circle.svg'
            alt='주황'
            className='w-12 h-12 animate-pop delay-400'
          />
        </object>
      </div>
      <p className='text-sm font-semibold'>{description}</p>
    </div>
  );
}
