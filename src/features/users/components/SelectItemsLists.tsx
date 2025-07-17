import { SelectItem } from '@/components/ui/select';
import { GRADE_OPTIONS } from '@/utils/constants/grades';
import type { JSX } from 'react';

export const selectItemsLists: JSX.Element[] = GRADE_OPTIONS.map(
  ({ label, value }) => (
    <SelectItem key={value} value={value}>
      {label}
    </SelectItem>
  )
);
