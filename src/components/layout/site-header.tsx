"use client";

import { useEffect, useMemo, useState } from "react";
import NextLink from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "@/components/theme/theme-context";
import { cn } from "@/lib/utils";

type NavItem = { label: string; href: string };
type HeaderLabels = {
  logo: string; menu: string; close: string; language: string; theme: string;
  light: string; dark: string; system: string;
};

type SiteHeaderProps = Readonly<{
  locale: "en" | "es";
  labels: HeaderLabels;
  navItems: NavItem[];
  profile: { name: string };
}>;

export function SiteHeader({ locale, labels, navItems, profile }: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(navItems[0]?.href ?? "#hero");
  const { setTheme, theme } = useTheme();
  const targetLocale = locale === "es" ? "en" : "es";
  const sectionIds = useMemo(() => navItems.map((item) => item.href.slice(1)), [navItems]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveHash(`#${visible.target.id}`);
      },
      { rootMargin: "-20% 0px -65%", threshold: [0, 0.25, 0.6] }
    );
    sectionIds.forEach((id) => { const section = document.getElementById(id); if (section) observer.observe(section); });
    return () => observer.disconnect();
  }, [sectionIds]);

  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  const languageHref = `/${targetLocale}${activeHash}`;
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-10">
      <NextLink href={locale === "en" ? "/" : "/es"} className="text-sm font-semibold tracking-[-0.02em]" aria-label={labels.logo}>
        {profile.name}
      </NextLink>

      <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
        {navItems.slice(1).map((item) => (
          <a key={item.href} href={item.href} aria-current={activeHash === item.href ? "location" : undefined}
            className={cn("py-2 text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground", activeHash === item.href && "text-foreground")}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="hidden items-center gap-2 lg:flex">
        <button type="button" onClick={toggleTheme} aria-label={labels.theme} title={theme === "dark" ? labels.light : labels.dark}
          className="inline-flex size-11 items-center justify-center rounded-[4px] bg-secondary text-foreground transition-[background-color,transform] duration-150 hover:bg-accent active:scale-[0.98]">
          {theme === "dark" ? <Sun aria-hidden="true" className="size-4" /> : <Moon aria-hidden="true" className="size-4" />}
        </button>
        <NextLink href={languageHref} aria-label={labels.language}
          className="inline-flex min-h-11 items-center rounded-[4px] bg-secondary px-4 text-sm font-semibold transition-colors duration-150 hover:bg-accent">
          {targetLocale.toUpperCase()}
        </NextLink>
      </div>

      <button type="button" aria-label={isOpen ? labels.close : labels.menu} aria-controls="mobile-navigation" aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)} className="inline-flex size-11 items-center justify-center rounded-[4px] bg-secondary lg:hidden">
        {isOpen ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
      </button>

      {isOpen ? (
        <div id="mobile-navigation" className="absolute inset-x-0 top-16 border-b border-border bg-foreground p-5 text-background sm:px-8 lg:hidden">
          <nav aria-label="Mobile primary" className="grid gap-1">
            {navItems.slice(1).map((item) => (
              <a key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="flex min-h-12 items-center text-lg">{item.label}</a>
            ))}
          </nav>
          <div className="mt-6 flex gap-2">
            <button type="button" onClick={toggleTheme} className="min-h-11 bg-background px-4 text-sm font-semibold text-foreground">{labels.theme}</button>
            <NextLink href={languageHref} onClick={() => setIsOpen(false)} className="inline-flex min-h-11 items-center bg-background px-4 text-sm font-semibold text-foreground">{targetLocale.toUpperCase()}</NextLink>
          </div>
        </div>
      ) : null}
      </div>
    </header>
  );
}

export type { HeaderLabels, NavItem };
