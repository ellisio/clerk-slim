import {
  ChevronUpDownIcon,
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative flex items-center text-gray-500 hover:text-black dark:text-stone-500 dark:hover:text-white">
      <div className="position pointer-events-none absolute left-2 inline-flex">
        {theme === "system" ? (
          <ComputerDesktopIcon className="h-3 w-3 flex-shrink-0 text-current" />
        ) : null}
        {theme === "dark" ? (
          <MoonIcon className="h-3 w-3 flex-shrink-0 text-current" />
        ) : null}
        {theme === "light" ? (
          <SunIcon className="h-3 w-3 flex-shrink-0 text-current" />
        ) : null}
      </div>
      <select
        className="bg-image h-7 cursor-pointer appearance-none rounded-md border-gray-200 bg-gray-100 !bg-none px-6 py-0 text-2xs text-gray-900 hover:border-gray-400 focus:border-gray-400 focus:ring-2 focus:ring-gray-300 dark:border-stone-700 dark:bg-stone-800 dark:text-white dark:focus:border-stone-600 dark:focus:ring-stone-800"
        aria-label="Change color theme"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        <option value="system">System</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
      <div className="position pointer-events-none absolute right-2 inline-flex">
        <ChevronUpDownIcon className=" h-3 w-3 flex-shrink-0 text-current" />
      </div>
    </div>
  );
};
