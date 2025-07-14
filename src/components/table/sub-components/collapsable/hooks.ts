import { useState, useRef, useEffect } from "react";
import type { CollapsibleProps } from ".";

export const useCollapsable = ({ repoNameHeight }: CollapsibleProps) => {
  const [expanded, setExpanded] = useState(false);
  const [shouldCollapse, setShouldCollapse] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Recalculate when element resizes
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const checkOverflow = () => {
      const fullHeight = el.scrollHeight;
      setShouldCollapse(fullHeight > repoNameHeight + 5);
    };

    checkOverflow();

    const observer = new ResizeObserver(() => {
      checkOverflow();
    });
    observer.observe(el);

    return () => observer.disconnect();
  }, [repoNameHeight]);

  const handleToggle = () => setExpanded((prev) => !prev);

  return {
    handleToggle,
    expanded,
    shouldCollapse,
    ref,
  };
};
