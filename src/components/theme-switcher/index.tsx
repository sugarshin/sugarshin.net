'use client';

import { DeviceDesktopIcon, MoonIcon, SunIcon } from '@primer/octicons-react';
import clsx from 'clsx';
import { useThemeState } from '~/hooks/useThemeState';
import styles from './index.module.css';

export default function ThemeSwitcher({ className }: { className?: string }) {
  const activeClass = styles.active;

  const [theme, setThemeState] = useThemeState();

  const handleSystemSettingClick = () => {
    setThemeState(null);
  };
  const handleLightClick = () => {
    setThemeState('light');
  };
  const handleDarkClick = () => {
    setThemeState('dark');
  };

  return (
    <div className={className}>
      <button
        className={clsx(styles.button, {
          [activeClass]: !theme,
        })}
        onClick={handleSystemSettingClick}
        aria-label="OS Default"
      >
        <DeviceDesktopIcon size="small" aria-hidden="true" />
      </button>
      <button
        className={clsx(styles.button, {
          [activeClass]: theme === 'light',
        })}
        onClick={handleLightClick}
        aria-label="Light"
      >
        <SunIcon size="small" aria-hidden="true" />
      </button>
      <button
        className={clsx(styles.button, {
          [activeClass]: theme === 'dark',
        })}
        onClick={handleDarkClick}
        aria-label="Dark"
      >
        <MoonIcon size="small" aria-hidden="true" />
      </button>
    </div>
  );
}
