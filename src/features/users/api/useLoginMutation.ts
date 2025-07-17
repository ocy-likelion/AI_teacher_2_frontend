import { httpClient } from '@/lib/api-client';
import type { userData } from '@/types/user.type';
import { useMutation } from '@tanstack/react-query';
import { SetUser } from './update-user-info';
import { toast } from 'sonner';
import type { NavigateFunction } from 'react-router-dom';
import type { AxiosError } from 'axios';

const login = async (data: userData) => {
  console.log('로그인 요청 보내는 데이터:', {
    username: data.username,
    password: data.password,
  });
  return await httpClient.post('/member/login', {
    username: data.username,
    password: data.password,
  });
};

export function UseLogin(
  idValue: string,
  setIsUser: React.Dispatch<React.SetStateAction<boolean>>,
  navigate: NavigateFunction
) {
  return useMutation({
    mutationFn: login,
    onSuccess: (res) => {
      const token = res.data.accessToken;
      if (token) {
        sessionStorage.setItem('token', token); // 토큰 저장
      }
      //현재 res값으로 로그인이 성공했다는 메시지만 return되므로
      //위의 data.id와 data.password를 따로 변수에 저장 후 전역 관리
      //홈페이지에 '김길동'으로 표시된다면 로그인이 성공했다고 생각하면 됨
      //이 부분은 로그인 성공 -> id로 member 조회해서 child name + grade 가져옴 => store에 등록 flow로 진행할 예정
      SetUser({ id: idValue, childName: '김길동' });
      console.log(res);
      toast.success('로그인 성공');
      navigate('/');
    },
    onError: (err: AxiosError) => {
      console.error(err);
      if (err.response?.status === 401) {
        if (confirm('회원가입 하시겠습니까?')) setIsUser(false);
        else toast.error('잘못 입력된 아이디 또는 비밀번호입니다.');
      } else toast.error('알수없는 오류가 발생했습니다.');
    },
  });
}
