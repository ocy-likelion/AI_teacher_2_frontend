import { Search } from 'lucide-react';

export default function SearchSection() {
  return (
    <section>
      <input type='text' placeholder='검색어를 입력하세요' />
      <button>
        <Search />
      </button>
    </section>
  );
}
