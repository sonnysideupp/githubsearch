import { useRef, useEffect } from 'react';

const useDebounce = () => {
  const timeout = useRef<NodeJS.Timeout>();

  const debounce = (func: (arg: any) => void, wait: number | undefined) => (args: any) => {
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => func(args), wait);
  }

  useEffect(() => {
    return () => {
      if (!timeout.current) return;
      clearTimeout(timeout.current);
    }
  }, []);

  return { debounce }
}

export default useDebounce;