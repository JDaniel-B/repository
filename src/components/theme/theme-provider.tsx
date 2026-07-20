"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useState
} from "react";
import {
  ThemeContext,
  type Theme,
  type ThemeContextValue
} from "@/components/theme/theme-context";

type ResolvedTheme = "light" | "dark";

type ThemeProviderProps = Readonly<{
  children: React.ReactNode;
}>;

const STORAGE_KEY = "portfolio-theme";
const DEFAULT_THEME: Theme = "dark";

function getSystemTheme(): ResolvedTheme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function resolveTheme(theme: Theme): ResolvedTheme {
  return theme === "system" ? getSystemTheme() : theme;
}

function applyTheme(theme: Theme) {
  const resolvedTheme = resolveTheme(theme);
  document.documentElement.classList.toggle("dark", resolvedTheme === "dark");
  document.documentElement.style.colorScheme = resolvedTheme;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(DEFAULT_THEME);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(STORAGE_KEY);
    const initialTheme =
      storedTheme === "light" || storedTheme === "dark" || storedTheme === "system"
        ? storedTheme
        : DEFAULT_THEME;

    applyTheme(initialTheme);

    window.requestAnimationFrame(() => setThemeState(initialTheme));
  }, []);

  useEffect(() => {
    if (theme !== "system") {
      applyTheme(theme);
      return;
    }

    const query = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => applyTheme("system");

    handleChange();
    query.addEventListener("change", handleChange);

    return () => query.removeEventListener("change", handleChange);
  }, [theme]);

  const setTheme = useCallback((nextTheme: Theme) => {
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
    setThemeState(nextTheme);
    applyTheme(nextTheme);
  }, []);

  const value = useMemo<ThemeContextValue>(
    () => ({
      setTheme,
      theme
    }),
    [setTheme, theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
