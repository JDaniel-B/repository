"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";

export function HeroReveal({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <m.div
      initial={{ opacity: 0, transform: "translateY(10px)" }}
      animate={{ opacity: 1, transform: "translateY(0)" }}
      transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </m.div>
  );
}
