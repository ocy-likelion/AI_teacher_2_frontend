import { httpClient } from '@/lib/api-client';
import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'sonner';
import { handleLoginError } from '@/utils/handle-api-error';
import Loading from '@/components/Loading';
import useUserStore from '@/stores/userStore';

export default function KakaoAuthPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);
  useEffect(() => {
    const code = searchParams.get('code');

    if (code) {
      kakaoLogin.mutate(code);
    }
  }, [searchParams]);

  const kakaoLogin = useMutation({
    mutationFn: (code: string) => {
      console.log(code);
      return httpClient.get(`/api/v2/oauth`, { params: { code: code } });
    },
    onSuccess: (res) => {
      console.log(res);
      const token = res.data.result.accessToken;
      if (token) {
        sessionStorage.setItem('token', token);
        setUser({ accessToken: token });
      }
      toast.success(res.data.message || '로그인 성공!');
      navigate('/');
    },
    onError: (err) => {
      handleLoginError(err);
      console.log('카카오 로그인 실패', err);
    },
  });

  if (kakaoLogin.isPending) {
    return <Loading />;
  }

  return <Loading />;
}
