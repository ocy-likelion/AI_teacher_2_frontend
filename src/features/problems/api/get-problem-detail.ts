import { useQuery } from '@tanstack/react-query';
import { httpClient } from '@/lib/api-client';
import { type Problem } from '@/types/problem.type';
import { problemDetailKey } from '@/utils/query-key';

const getProblemDetail = async (id: number) => {
  const res = await httpClient.get<Problem>(`/problem?problemId=${id}`);
  return res.data;
};

export const useProblemDetail = (id: number) => {
  return useQuery({
    queryKey: problemDetailKey(id),
    queryFn: () => getProblemDetail(id),
  });
};
