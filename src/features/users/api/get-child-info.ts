import { useQuery } from '@tanstack/react-query';
import { httpClient } from '@/lib/api-client';
import type { Child } from '@/types/user.type';
import { childInfoKey } from '@/utils/query-key';

const getChildInfo = async () => {
  const res = await httpClient.get<Child>('api/v2/members/me/profile');
  return res.data;
};

export const useChildInfo = () => {
  return useQuery({
    queryKey: childInfoKey(),
    queryFn: getChildInfo,
  });
};
