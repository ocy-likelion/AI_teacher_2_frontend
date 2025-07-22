import axios from 'axios';
import { toast } from 'sonner';

export function handleApiError(error: unknown) {
  if (!axios.isAxiosError(error)) {
    toast.error('알 수 없는 오류가 발생했어요.');
    return;
  }

  const status = error.response?.status;
  const message = error.response?.data?.message;

  if (status === 400) {
    toast.error(message || '잘못된 요청입니다.');
  } else if (status === 401) {
    toast.error('로그인이 필요합니다.');
    setTimeout(() => {
      window.location.href = '/login';
    }, 1500);
  } else if (status === 404) {
    toast.error('데이터를 찾을 수 없습니다.');
  } else if (status && status >= 500) {
    toast.error('일시적인 서버 오류가 발생했어요.');
  } else {
    toast.error(message || '요청에 실패했어요.');
  }
}

export function handleLoginError(error: unknown) {
  if (!axios.isAxiosError(error)) {
    toast.error('알 수 없는 오류가 발생했어요.');
    return;
  }

  const status = error.response?.status;
  const message = error.response?.data?.message;

  if (status === 401) {
    toast.error(message || '아이디 또는 비밀번호가 올바르지 않아요.');
  } else if (status === 400) {
    toast.error(message || '요청 형식이 잘못되었습니다.');
  } else if (status && status >= 500) {
    toast.error(
      message || '서버 오류가 발생했어요. 잠시 후 다시 시도해주세요.',
    );
  } else {
    toast.error(message || '로그인에 실패했어요.');
  }
}
