import { useEffect, useState } from 'react';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function MockApiPage() {
  const [data, setData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function fetchPing() {
    try {
      const res = await fetch(`${API_BASE_URL}/mockapi/ping`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const text = await res.text();
      setData(text);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    setLoading(true);
    fetchPing();
  }, []);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div style={{ color: 'red' }}>에러: {error}</div>;

  return (
    <div>
      <h1>API 호출 결과</h1>
      <pre>{data}</pre>
    </div>
  );
}
