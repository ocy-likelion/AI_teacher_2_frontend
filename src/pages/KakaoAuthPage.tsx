import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Loading from '@/components/Loading';
import useUserStore from '@/stores/userStore';
import { useKakaoMemberInfo } from '@/features/users/api/get-kakao-member-info';

export default function KakaoAuthPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);
  const { mutate: kakaoLogin } = useKakaoMemberInfo(setUser, navigate);

  useEffect(() => {
    const code = searchParams.get('code');
    if (code) {
      kakaoLogin(code);
    } else {
      navigate('/intro');
    }
  }, [searchParams]);

  return <Loading />;
}
