"use client";

import { createContext, useContext } from "react";

type Theme = "light" | "dark" | "system";

type ThemeContextValue = {
  setTheme: (theme: Theme) => void;
  theme: Theme;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider.");
  }

  return context;
}

export { ThemeContext, useTheme };
export type { Theme, ThemeContextValue };
