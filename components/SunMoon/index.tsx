'use client';
import { useDarkMode, useEffectOnce } from 'usehooks-ts';
import Moon from './_components/Moon';
import Sun from './_components/Sun';

export default function SunMoon() {
  const { isDarkMode, toggle } = useDarkMode();
  function handleClick() {
    const opposite = isDarkMode ? 'light' : 'dark';
    toggle();
    document.documentElement.setAttribute('data-theme', opposite);
  }

  useEffectOnce(function () {
    document.documentElement.setAttribute(
      'data-theme',
      isDarkMode ? 'dark' : 'light'
    );
  });

  return (
    <button onClick={handleClick} className="absolute top-[30px] left-[30px] animate-spin-slow">
      {isDarkMode ? <Moon/> : <Sun/>}
    </button>
  );
}
