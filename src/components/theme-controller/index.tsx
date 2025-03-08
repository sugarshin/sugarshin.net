'use client';

import { useEffect } from 'react';
import { useThemeState } from '~/hooks/useThemeState';

export default function ThemeController() {
  const [theme] = useThemeState();

  useEffect(() => {
    if (!theme) {
      delete document.documentElement.dataset.theme;
      return;
    }

    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return <></>;
}
