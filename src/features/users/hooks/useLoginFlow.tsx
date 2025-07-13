import type { userData } from '@/types/types';
import { type NavigateFunction } from 'react-router-dom';

export function LoginHandler(
  setIsUser: React.Dispatch<React.SetStateAction<boolean>>,
  data: userData
) {
  console.log(data);
  // 만약 기존 회원이 아닐 경우 isUser = false;
  // 잘못 입력했을 경우를 대비하여 confirm으로 확인.
  if (confirm('잘못 입력된 정보입니다. 회원가입 하시겠습니까?'))
    setIsUser(false);
}

export function ChildNameFormHandler(
  setChildNameInput: React.Dispatch<React.SetStateAction<boolean>>,
  data: userData
) {
  if (data.childName !== '') setChildNameInput(true);
}

export function ChildGradeFormHandler(
  data: userData,
  navigate: NavigateFunction
) {
  if (data.childGrade !== '') navigate('/');
}
