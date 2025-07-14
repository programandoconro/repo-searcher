import { useRef, useState, useEffect } from "react";

export const useRowWrapper = () => {
  const repoNameRef = useRef<HTMLDivElement>(null);
  const [repoNameHeight, setRepoNameHeight] = useState(50);

  useEffect(() => {
    const el = repoNameRef.current;
    if (!el) return;

    const currentHeight = el.clientHeight;
    if (currentHeight > repoNameHeight) {
      setRepoNameHeight(currentHeight);
    }
  }, [repoNameHeight]);

  return {
    repoNameRef,
    repoNameHeight,
  };
};
