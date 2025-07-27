export type Grades = {
  label: string;
  value: number;
};

export const SCHOOL: Grades[] = [
  { label: '초등학교', value: 0 },
  { label: '중학교', value: 6 },
];

export const GRADES_NUM: Grades[] = [
  { label: '1학년', value: 1 },
  { label: '2학년', value: 2 },
  { label: '3학년', value: 3 },
  { label: '4학년', value: 4 },
  { label: '5학년', value: 5 },
  { label: '6학년', value: 6 },
];

export const GRADE_OPTIONS: Grades[] = [
  { label: '초등 1학년', value: 1 },
  { label: '초등 2학년', value: 2 },
  { label: '초등 3학년', value: 3 },
  { label: '초등 4학년', value: 4 },
  { label: '초등 5학년', value: 5 },
  { label: '초등 6학년', value: 6 },
  { label: '중등 1학년', value: 7 },
  { label: '중등 2학년', value: 8 },
  { label: '중등 3학년', value: 9 },
];

export const getGradeLabel = (grade: number) => {
  const result = GRADE_OPTIONS.find((option) => option.value === grade);

  return result ? result.label : '학년 정보 없음';
};
