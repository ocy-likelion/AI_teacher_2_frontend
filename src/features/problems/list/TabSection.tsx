import { Badge } from '@/components/ui/badge';
import { LayoutGrid, StretchHorizontal } from 'lucide-react';

export default function TabSection() {
  return (
    <section>
      <div>
        <Badge className='badge'>전체</Badge>
        <Badge className='badge'>즐겨찾기</Badge>
      </div>
      <div>
        <StretchHorizontal />
        <LayoutGrid />
      </div>
    </section>
  );
}
