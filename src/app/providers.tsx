"use client";

import { domAnimation, LazyMotion, MotionConfig } from "framer-motion";
import { ThemeProvider } from "@/components/theme/theme-provider";

type ProvidersProps = Readonly<{
  children: React.ReactNode;
}>;

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider>
      <LazyMotion features={domAnimation}>
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </LazyMotion>
    </ThemeProvider>
  );
}
