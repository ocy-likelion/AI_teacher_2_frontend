import { httpClient } from '@/lib/api-client';
import type { user } from '@/stores/userStore';
import { handleLoginError } from '@/utils/handle-api-error';
import { useMutation, type UseMutationResult } from '@tanstack/react-query';
import type { AxiosError, AxiosResponse } from 'axios';
import type { NavigateFunction } from 'react-router-dom';
import { toast } from 'sonner';

interface LoginResponse {
  result: {
    accessToken: string;
    memberId: string;
  };
  message: string;
}

type kakaoMutationResult = UseMutationResult<
  AxiosResponse<LoginResponse>,
  AxiosError,
  string,
  unknown
>;

interface getKakaMeberInfoType {
  (
    setUser: (user: user) => void,
    navigate: NavigateFunction,
  ): kakaoMutationResult;
}

const kakaoMemberInfo = async (code: string) => {
  const res = await httpClient.get(`/api/v2/oauth`, { params: { code: code } });
  return res.data;
};

export const getKakaoMemberInfo: getKakaMeberInfoType = (setUser, navigate) => {
  return useMutation({
    mutationFn: (code: string) => kakaoMemberInfo(code),
    onSuccess: (res) => {
      const token = res.result.accessToken;
      const memberId = res.result.memberId;
      if (token) {
        sessionStorage.setItem('token', token);
        setUser({ accessToken: token, memberId: memberId });
        toast.success(res.message || '로그인 성공!');
        navigate('/');
      }
    },
    onError: (err) => {
      handleLoginError(err);
      console.log('카카오 로그인 실패', err);
      navigate('/');
    },
  });
};
