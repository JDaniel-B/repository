"use client";

import { m, useReducedMotion } from "framer-motion";
import type { AriaRole, ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = Readonly<{
  "aria-label"?: string;
  "aria-labelledby"?: string;
  as?: "div" | "section";
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
  once?: boolean;
  role?: AriaRole;
}>;

export function Reveal({
  as = "div",
  children,
  className,
  delay = 0,
  once = true,
  ...props
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return as === "section" ? (
      <section className={className} {...props}>
        {children}
      </section>
    ) : (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

  return as === "section" ? (
    <m.section
      className={className}
      initial={{ opacity: 0, y: 18 }}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once, margin: "-80px" }}
      whileInView={{ opacity: 1, y: 0 }}
      {...props}
    >
      {children}
    </m.section>
  ) : (
    <m.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once, margin: "-80px" }}
      whileInView={{ opacity: 1, y: 0 }}
      {...props}
    >
      {children}
    </m.div>
  );
}

type MotionCardProps = Readonly<{
  children: ReactNode;
  className?: string;
  delay?: number;
}>;

export function MotionCard({ children, className, delay = 0 }: MotionCardProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={cn("h-full", className)}>{children}</div>;
  }

  return (
    <m.div
      className={cn("h-full", className)}
      initial={{ opacity: 0, y: 16 }}
      transition={{ delay, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -4 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </m.div>
  );
}
