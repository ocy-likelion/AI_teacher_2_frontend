import OrangeTriangle from '@/assets/images/characters/orange_triangle.svg?react';
import Yellow from '@/assets/images/characters/yellow.svg?react';
import Green from '@/assets/images/characters/green.svg?react';
import Star from '@/assets/images/Star_Yellow.svg?react';
import Kakao from '@/assets/images/Kakao.svg?react';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
  // const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;
  const REDIRECT_URI = import.meta.env.VITE_FRONT_REDIRECT_URI;

  const kakaoLoginHandler = () => {
    console.log(REDIRECT_URI);
    // const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=http://localhost:5173/oauth/kakao&response_type=code`;
    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    window.location.href = kakaoAuthUrl;
  };

  return (
    <section className='relative h-full w-full px-5 py-10'>
      <div className='pointer-events-none w-[380px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/5 z-0 star-pulse'>
        <Star className='w-full z-0' />
      </div>

      <section className='relative flex flex-col gap-3 z-50 will-change-transform'>
        <h1 className='title-md z-50'>
          "엄마, 이거 어떻게 풀어?"
          <br />
          <span className='text-primary'>AI</span>가 부모님께
          <br />
          <span className='text-primary'>설명방법을</span> 알려드려요
        </h1>
        <p className='text-gray5 dark:text-gray4 body-md z-50'>
          어려운 수학 문제, 이제 쉽게 설명해줄 수 있어요
        </p>
      </section>

      <section className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/5 w-80 h-96 z-10'>
        <div className='absolute top-13 left-0 rotate-green'>
          <Green className='w-30 h-30 transform rotate-[20deg]' />
        </div>

        <div className='absolute top-20 right-3 rotate-yellow'>
          <Yellow className='w-34 h-34 transform rotate-[10deg]' />
        </div>

        <div className='absolute bottom-11 left-2/4 -translate-x-1/2 rotate-orange'>
          <OrangeTriangle className='w-30 h-30 transform rotate-[-15deg]' />
        </div>
      </section>

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
