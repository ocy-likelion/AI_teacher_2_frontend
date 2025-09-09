import type { Concept } from './concept.type';

export type Problem = {
  id: number;
  imageUrl: string;
  concepts: Omit<Concept, 'description'>[];
  favorite: boolean;
  //ocrResult: string;
  //llmResult: string;
  //createdAt: string;
  summary: string;
  explanation: string;
  activatedAt: string;
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

export type CursorPaginationParams = {
  pageParam?: string | null;
};

export type GetFavoriteListResponse = {
  data: (Problem & { problemId: number })[];
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
