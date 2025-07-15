import { useEffect } from 'react';

type InfiniteScrollProps = {
  targetRef: React.RefObject<HTMLElement | null>;
  onIntersect: () => void;
  enabled: boolean;
  threshold?: number;
};

export const useInfiniteScroll = ({
  targetRef,
  onIntersect,
  enabled,
  threshold = 1,
}: InfiniteScrollProps) => {
  useEffect(() => {
    if (!enabled || !targetRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onIntersect();
        }
      },
      { threshold }
    );

    observer.observe(targetRef.current);

    return () => observer.disconnect();
  }, [enabled, targetRef, onIntersect, threshold]);
};
