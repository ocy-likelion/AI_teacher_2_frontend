export type userData = {
  username: string;
  password: string;
  childName?: string; // 선택적 필드
  childGrade?: number; // 선택적 필드
};

// members 도메인 공통 응답 타입 정의
export type MemberResponseType<T> = {
  isSuccess: boolean;
  code: string;
  message: string;
  result: T;
};

export type User = {
  nickname: string;
  email: string;
};

export type Child = {
  childName: string;
  childGrade: number;
};
