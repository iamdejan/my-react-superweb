import { useState } from "react";

export function isStateChanged<T>(previous: T, current: T): boolean {
  return previous !== current;
}

export function usePrevious<T>(value: T): {previous: T, updatePrevious: () => void} {
  const [current, setCurrent] = useState<T>(value);
  const [previous, setPrevious] = useState<T>(value);

  if(current !== value) {
    setCurrent(value);
  }

  return {
    previous: previous,
    updatePrevious: (): void => {
      setPrevious(current);
    }
  };
}
