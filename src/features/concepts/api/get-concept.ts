import { httpClient } from '@/lib/api-client';
import { type Concept } from '@/types/concept.type';
import { conceptKey } from '@/utils/query-key';
import { useQuery } from '@tanstack/react-query';

const getConcept = async (id: number) => {
  const res = await httpClient.get<Concept>(`/concept?conceptId=${id}`);
  return res.data;
};

export const useConcept = (id: number) => {
  return useQuery({
    queryKey: conceptKey(String(id)),
    queryFn: () => getConcept(id),
  });
};
