import { useEffect, useState } from 'react';

type Size = {
  width: number | null;
  height: number | null;
};

export default function useWindowSize() {
  const [size, setSize] = useState<Size>({
    width: null,
    height: null,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Return null values during SSR to prevent hydration mismatch
  if (!mounted) {
    return { width: null, height: null };
  }

  return size;
}
