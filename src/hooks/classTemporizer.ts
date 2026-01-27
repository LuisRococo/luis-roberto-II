import { useState, useEffect, useRef } from "react";

export const useClassTemporizer = (time: number) => {
  const [isActive, setIsActive] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startReset = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    setIsActive(true);

    timeoutRef.current = setTimeout(() => {
      setIsActive(false);
    }, time);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return { isActive, startReset };
};
