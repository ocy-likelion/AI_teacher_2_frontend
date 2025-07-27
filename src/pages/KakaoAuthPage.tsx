import { httpClient } from '@/lib/api-client';
import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import { toast } from 'sonner';
import { handleApiError, handleLoginError } from '@/utils/handle-api-error';
import Loading from '@/components/Loading';

// // Redirect URI를 프론트로 바꿔주세요!
// const FRONT_REDIRECT_URI = 'http://localhost:5173/oauth/kakao'; // 프론트 주소

export default function KakaoAuthPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // 프론트 페이지 예시: /oauth/kakao
  useEffect(() => {
    const code = searchParams.get('code');

    if (code) {
      kakaoLogin.mutate(code);
    }
  }, [searchParams]);

  const kakaoLogin = useMutation({
    mutationFn: (code: string) =>
      httpClient.post(`http://localhost:8080/api/v2/oauth?code=${code}`, {
        code: code,
        redirect_uri: `${window.location.origin}/oauth/kakao`,
        user: {},
      }),
    onSuccess: (res) => {
      if (res.data.item) {
        const user = res.data.item;
        console.log(user);
        navigate('/');
      }
    },
    onError: (err) => {
      handleLoginError(err);
      console.log('카카오 로그인 실패', err);
      navigate('/intro');
    },
  });

  //   fetch(`http://localhost:8080/api/v2/oauth?code=${code}`, {
  //     method: 'GET',
  //   })
  //     .then(async (res) => {
  //       const data = await res.json();
  //       const token = res.headers.get('authorization');

  //       if (token) {
  //         localStorage.setItem('accessToken', token);
  //       }

  //       // 성공 처리
  //       console.log('로그인 성공:', data);
  //       // 이동 or 상태 업데이트
  //     })
  //     .catch((err) => {
  //       console.error('로그인 실패', err);
  //     });

  if (kakaoLogin.isPending) {
    return <Loading />;
  }

  return <Loading />;
}
