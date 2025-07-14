import { useRef, useState, useEffect } from "react";

export const useRowWrapper = () => {
  const repoNameRef = useRef<HTMLDivElement>(null);
  const [repoNameHeight, setRepoNameHeight] = useState(50);

  useEffect(() => {
    const el = repoNameRef.current;
    if (!el) return;

    const updateHeight = () => {
      const currentHeight = el.clientHeight;
      setRepoNameHeight(currentHeight);
    };

    // Initial check
    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return {
    repoNameRef,
    repoNameHeight,
  };
};
