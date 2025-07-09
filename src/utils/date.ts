const parseDate = (raw: string) => {
  const formatted = raw.replace(' ', 'T').replace(' +0000', 'Z');
  return new Date(formatted);
};

export const formatListDate = (dateString: string) => {
  const date = parseDate(dateString);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const minute = Math.floor(diff / (1000 * 60));
  const hour = Math.floor(diff / (1000 * 60 * 60));
  const day = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (minute < 1) return '방금 전';
  if (minute < 60) return `${minute}분 전`;
  if (hour < 24) return `${hour}시간 전`;
  if (day === 1) return '어제';

  const weekday = date.toLocaleDateString('ko-KR', { weekday: 'short' });

  return `${date.getFullYear()}.${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}.${date
    .getDate()
    .toString()
    .padStart(2, '0')} (${weekday})`;
};

export const formatDetailDate = (dateString: string) => {
  const date = parseDate(dateString);
  const weekday = date.toLocaleDateString('ko-KR', { weekday: 'long' });
  const hour = date.getHours().toString().padStart(2, '0');
  const minute = date.getMinutes().toString().padStart(2, '0');

  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 (${weekday}) ${hour}:${minute}`;
};
