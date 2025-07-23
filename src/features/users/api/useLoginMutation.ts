import { httpClient } from '@/lib/api-client';
import type { userData } from '@/types/user.type';
import { useMutation } from '@tanstack/react-query';
import useUserStore from '@/stores/userStore';
import { handleLoginError } from '@/utils/handle-api-error';
import { toast } from 'sonner';

const login = async (data: userData) => {
  return await httpClient.post('/member/login', {
    username: data.username,
    password: data.password,
  });
};

export const useLogin = () => {
  const setUser = useUserStore((state) => state.setUser);
  return useMutation({
    mutationFn: login,
    onSuccess: async (res) => {
      const token = res.data.accessToken;
      if (token) {
        sessionStorage.setItem('token', token);
        setUser({ accessToken: token });
      }
      toast.success(res.data.message || '로그인 성공!');
    },
    onError: handleLoginError,
  });
};
