import { useCallback, useEffect, useState } from 'react';

export default function useScroll(threshold: number) {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const onScroll = useCallback(() => {
    if (typeof window !== 'undefined') {
      setScrolled((window.scrollY || window.pageYOffset) > threshold);
    }
  }, [threshold]);

  useEffect(() => {
    setMounted(true);
    
    // Only add event listener after component is mounted
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', onScroll);
      // Call onScroll once to set initial state
      onScroll();
      
      return () => window.removeEventListener('scroll', onScroll);
    }
  }, [onScroll]);

  // Return false during SSR to prevent hydration mismatch
  if (!mounted) {
    return false;
  }

  return scrolled;
}
