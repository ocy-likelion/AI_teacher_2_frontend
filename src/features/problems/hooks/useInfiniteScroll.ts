import { useEffect } from 'react';

type InfiniteScrollProps = {
  targetRef: React.RefObject<HTMLElement | null>;
  onIntersect: () => void;
  enabled: boolean;
  rootMargin?: string;
  threshold?: number;
};

export const useInfiniteScroll = ({
  targetRef,
  onIntersect,
  enabled,
  rootMargin,
  threshold = 0,
}: InfiniteScrollProps) => {
  useEffect(() => {
    if (!enabled || !targetRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onIntersect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(targetRef.current);

    return () => observer.disconnect();
  }, [enabled, targetRef, onIntersect, threshold]);
};
