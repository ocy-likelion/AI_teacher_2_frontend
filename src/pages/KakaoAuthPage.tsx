import { httpClient } from '@/lib/api-client';
import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'sonner';
import { handleLoginError } from '@/utils/handle-api-error';
import Loading from '@/components/Loading';
import useUserStore from '@/stores/userStore';
import Loading from '@/components/Loading';

export default function KakaoAuthPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const code = searchParams.get('code');

    if (code) {
      kakaoLogin.mutate(code);
    }
  }, [searchParams]);

  const kakaoLogin = useMutation({
    mutationFn: (code: string) => httpClient.get(`/api/v2/oauth?code=${code}`),
    onSuccess: (res) => {
      const setUser = useUserStore((state) => state.setUser);
      const token = res.data.accessToken;
      if (token) {
        sessionStorage.setItem('token', token);
        setUser({ accessToken: token });
      }
      toast.success(res.data.message || '로그인 성공!');

      if (res.data.isChild) {
        navigate('/onboarding');
      } else {
        navigate('/');
      }
    },
    onError: (err) => {
      handleLoginError(err);
      console.log('카카오 로그인 실패', err);
      // navigate('/intro');
    },
  });

  if (kakaoLogin.isPending) {
    return <Loading />;
  }

  return <Loading />;
}
