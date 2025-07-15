import { useQuery } from '@tanstack/react-query';
import { httpClient } from '@/lib/api-client';
import { type Problem } from '@/types/problem';

const getProblemDetail = async (id: string) => {
  const res = await httpClient.get<Problem>(`/problem?problemId=${id}`);
  return res.data;
};

export const useProblemDetail = (id: string) => {
  return useQuery({
    queryKey: ['problemDetail', id],
    queryFn: () => getProblemDetail(id),
  });
};
