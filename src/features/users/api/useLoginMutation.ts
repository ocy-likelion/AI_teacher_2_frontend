import { httpClient } from '@/lib/api-client';
import type { userData } from '@/types/user.type';
import { useMutation } from '@tanstack/react-query';
import { SetUser } from './update-user-info';
import { toast } from 'sonner';
import type { NavigateFunction } from 'react-router-dom';
import type { AxiosError } from 'axios';

const login = async (data: userData) => {
  return await httpClient.post('/member/login', {
    username: data.username,
    password: data.password,
  });
};

const getChildInfo = async (memberId: number) => {
  return await httpClient.get(`/member/${memberId}`);
};

export const useLogin = (idValue: string, navigate: NavigateFunction) => {
  return useMutation({
    mutationFn: login,
    onSuccess: async (res) => {
      const token = res.data.accessToken;
      if (token) {
        sessionStorage.setItem('token', token);
      }

      try {
        // TODO : 임시로 8번 고정 (카카오 로그인 적용시 변경 예정)
        const childInfoResponse = await getChildInfo(8);

        if (childInfoResponse.data) {
          const childData = childInfoResponse.data;

          SetUser({
            id: idValue,
            childName: childData.name,
            childGrade: childData.grade || null,
          });
        } else {
          SetUser({
            id: idValue,
            childName: '김길동',
          });
        }

        toast.success('로그인 성공');
        navigate('/');
      } catch (childInfoError) {
        SetUser({
          id: idValue,
          childName: '김길동',
        });
        console.error(childInfoError);

        toast.success('로그인 성공 (자녀 정보 조회는 실패)');
        navigate('/');
      }
    },
    onError: (err: AxiosError) => {
      console.error(err);
      if (err.response?.status === 401) {
        // if (confirm('회원가입 하시겠습니까?')) return;
        // else
        toast.error('잘못 입력된 아이디 또는 비밀번호입니다.');
      } else toast.error('알수없는 오류가 발생했습니다.');
    },
  });
};
