import Kakao from '@/assets/images/Kakao.svg?react';

export default function IntroLoginFunction() {
  const kakaoLoginHandler = () => {
    const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
    const REDIRECT_URI = import.meta.env.VITE_FRONT_REDIRECT_URI;
    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    window.location.href = kakaoAuthUrl;
  };

  return (
    <section className='absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-100'>
      <button
        onClick={kakaoLoginHandler}
        className='w-12 h-12 rounded-md flex items-center justify-center cursor-pointer hover:scale-110 active:scale-110 duration-150 ease-in'
      >
        <Kakao className='w-full h-full' />
      </button>
    </section>
  );
}
