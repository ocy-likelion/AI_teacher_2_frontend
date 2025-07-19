export type userData = {
  username: string;
  password: string;
  childName?: string; // 선택적 필드
  childGrade?: number; // 선택적 필드
};

export type UpdateChildRequest = {
  name: string;
  grade: number;
};