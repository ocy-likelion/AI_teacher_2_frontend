import Kakao from '@/assets/images/Kakao.svg?react';
import KakaoWide from '@/assets/images/Kakao_wide.svg?react';
import Naver from '@/assets/images/Naver.svg?react';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { toast } from 'sonner';

export default function IntroLoginFunction() {
  const kakaoLoginHandler = () => {
    const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
    const REDIRECT_URI = import.meta.env.VITE_FRONT_REDIRECT_URI;
    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    window.location.href = kakaoAuthUrl;
  };

  const isMd = useMediaQuery('(min-width: 768px)');

  return (
    <section className='w-fit self-center flex flex-col items-center gap-3 z-100 md:static md:justify-center md:w-full md:pb-[70px] md:translate-0 '>
      <button
        onClick={kakaoLoginHandler}
        className='w-12 h-12 rounded-md flex items-center justify-center cursor-pointer hover:scale-110 active:scale-110 md:hover:scale-101 duration-150 ease-in md:size-fit'
      >
        {isMd ? <KakaoWide className='w-[250px] h-fit' /> : <Kakao />}
      </button>
      {isMd ? (
        <button
          onClick={() => toast.info('아직 준비중이예요')}
          className='w-12 h-12 rounded-md flex items-center justify-center cursor-pointer hover:scale-110 active:scale-110 md:hover:scale-101 duration-150 ease-in md:size-fit'
        >
          <Naver className='w-[250px] h-fit' />
        </button>
      ) : null}
    </section>
  );
}
