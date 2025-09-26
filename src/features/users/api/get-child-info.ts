import { useQuery } from '@tanstack/react-query';
import { httpClient } from '@/lib/api-client';
import type { Child, MemberResponseType } from '@/types/user.type';
import { childInfoKey } from '@/utils/query-key';

const getChildInfo = async () => {
  const res = await httpClient.get<MemberResponseType<Child>>(
    '/members/child/profile',
  );
  return res.data;
};

export const useChildInfo = () => {
  return useQuery({
    queryKey: childInfoKey(),
    queryFn: getChildInfo,
  });
};
