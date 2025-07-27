import { useQuery } from '@tanstack/react-query';
import { httpClient } from '@/lib/api-client';
import type { Child } from '@/types/user.type';
import { childInfoKey } from '@/utils/query-key';

const getChildInfo = async (memberId: number) => {
  const res = await httpClient.get<Child>(`/member/${memberId}`);
  return res.data;
};

export const useChildInfo = (memberId: number) => {
  return useQuery({
    queryKey: childInfoKey(),
    queryFn: () => getChildInfo(memberId),
  });
};
