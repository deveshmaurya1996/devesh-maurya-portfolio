'use client';

import { MoonStar, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import IconButton from '@/components/general/icon-button';
import useMounted from '@/hooks/use-mounted';

const ThemeSwitcher = () => {
  const mounted = useMounted();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const label =
    theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';

  // until the UI is mounted, display a dummy icon
  if (!mounted) {
    return (
      <IconButton aria-label="Toggle color theme" disabled>
        <Sun aria-hidden />
      </IconButton>
    );
  }

  return (
    <IconButton onClick={toggleTheme} aria-label={label}>
      {theme === 'dark' ? <Sun aria-hidden /> : <MoonStar aria-hidden />}
    </IconButton>
  );
};

export default ThemeSwitcher;
