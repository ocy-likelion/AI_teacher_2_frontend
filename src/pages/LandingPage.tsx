import Kakao from '@/assets/images/Kakao.svg?react';
import { useNavigate } from 'react-router-dom';
import IntroImageSection from '@/features/users/components/IntroImageSection';

export default function LandingPage() {
  const navigate = useNavigate();

  const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
  const REDIRECT_URI = import.meta.env.VITE_FRONT_REDIRECT_URI;

  const kakaoLoginHandler = () => {
    console.log(REDIRECT_URI);
    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    window.location.href = kakaoAuthUrl;
  };

  return (
    <section className='relative h-full w-full px-5 py-10 '>
      <IntroImageSection />
      <section className='absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-100'>
        <button
          onClick={kakaoLoginHandler}
          className='w-12 h-12 rounded-md flex items-center justify-center cursor-pointer hover:scale-110 active:scale-110 duration-150 ease-in'
        >
          <Kakao className='w-full h-full' />
        </button>
        <button
          onClick={() => navigate('/login')}
          className='text-gray5 dark:text-gray2 body-sm cursor-pointer hover:scale-110 hover:text-black dark:hover:text-white active:scale-110 active:text-black dark:active:text-white duration-150 ease-in'
        >
          <p> 아이디로 로그인할래요!</p>
        </button>
      </section>
    </section>
  );
}
