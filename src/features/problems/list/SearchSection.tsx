import { Search } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function SearchSection() {
  const [input, setInput] = useState('');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const currentQ = searchParams.get('q') ?? '';
    if (input === currentQ) return;

    const nextParams = new URLSearchParams(searchParams);
    if (input) {
      nextParams.set('q', input);
    } else {
      nextParams.delete('q');
    }
    console.log(nextParams);
    navigate(`/history?${nextParams.toString()}`);
  };

  return (
    <form
      className='w-[280px] bg-white dark:bg-gray1 border border-gray3 dark:border-gray5 rounded-full px-5 py-3 flex justify-between items-center'
      onSubmit={handleSubmit}
    >
      <input
        id='search'
        type='text'
        placeholder='검색어를 입력하세요'
        className='border-none outline-none placeholder:text-gray5 text-black body-sm'
        onChange={(e) => setInput(e.target.value)}
      />
      <button className='cursor-pointer flex items-center justify-center'>
        <Search className='text-gray5 active:scale-125 duration-300 ease-out' />
      </button>
    </form>
  );
}
