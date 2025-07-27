export type userData = {
  username: string;
  password: string;
  childName?: string; // 선택적 필드
  childGrade?: number; // 선택적 필드
};

export type Child = {
  id: number;
  name: string;
  username: string;
  grade: number;
};

export type UpdateChildRequest = {
  name: string;
  grade: number;
};
