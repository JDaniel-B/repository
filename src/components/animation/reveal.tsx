"use client";

import { m } from "framer-motion";
import type { AriaRole, ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = Readonly<{
  "aria-label"?: string;
  "aria-labelledby"?: string;
  as?: "div" | "section";
  children: ReactNode;
  className?: string;
  id?: string;
  role?: AriaRole;
}>;

export function Reveal({ as = "div", children, className, ...props }: RevealProps) {
  const Component = as === "section" ? m.section : m.div;
  return (
    <Component
      className={className}
      initial={false}
      {...props}
    >
      {children}
    </Component>
  );
}

type MotionCardProps = Readonly<{ children: ReactNode; className?: string; delay?: number }>;

export function MotionCard({ children, className, delay = 0 }: MotionCardProps) {
  return (
    <m.div
      className={cn("h-full", className)}
      initial={{ opacity: 0, transform: "translateY(10px)" }}
      transition={{ delay, duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
      viewport={{ once: true, margin: "-64px" }}
      whileInView={{ opacity: 1, transform: "translateY(0)" }}
    >
      {children}
    </m.div>
  );
}
