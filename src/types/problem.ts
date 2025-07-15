import type { Concept } from './concept';

export type Problem = {
  id: number;
  imageId: number; // 추후 url로 변경될 예정
  concepts: Omit<Concept, 'description'>[];
  favorite: boolean;
  ocrResult: string;
  llmResult: string;
  createdAt: string;
};

export type GetProblemListResponse = {
  data: Problem[];
  pagination: {
    limit: number;
    hasNextPage: boolean;
    nextCursor: string;
  };
  links: {
    self: string;
    next: string;
  };
};
