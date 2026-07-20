"use client";

import { useEffect, useMemo, useState } from "react";
import NextLink from "next/link";
import { Check, Laptop, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "@/components/theme/theme-context";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
};

type HeaderLabels = {
  logo: string;
  menu: string;
  close: string;
  language: string;
  theme: string;
  light: string;
  dark: string;
  system: string;
};

type SiteHeaderProps = Readonly<{
  locale: "en" | "es";
  labels: HeaderLabels;
  navItems: NavItem[];
  profile: {
    name: string;
  };
}>;

const themes = [
  { value: "light", icon: Sun },
  { value: "dark", icon: Moon },
  { value: "system", icon: Laptop }
] as const;

type ThemeOption = (typeof themes)[number]["value"];

export function SiteHeader({ locale, labels, navItems, profile }: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(navItems[0]?.href ?? "#hero");
  const { setTheme, theme } = useTheme();
  const targetLocale = locale === "es" ? "en" : "es";
  const mobileMenuId = "mobile-navigation";
  const sectionIds = useMemo(
    () =>
      navItems.flatMap((item) => {
        const id = item.href.startsWith("#") ? item.href.slice(1) : "";

        return id ? [id] : [];
      }),
    [navItems]
  );
  const themeLabels = useMemo(
    () => ({
      light: labels.light,
      dark: labels.dark,
      system: labels.system
    }),
    [labels.dark, labels.light, labels.system]
  );

  useEffect(() => {
    const getActiveHash = () => {
      const headerOffset = 96;
      const currentPosition = window.scrollY + headerOffset;
      const documentHeight = document.documentElement.scrollHeight;
      const viewportBottom = window.scrollY + window.innerHeight;
      let nextHash = navItems[0]?.href ?? "#hero";

      if (viewportBottom >= documentHeight - 4 && sectionIds.length > 0) {
        return `#${sectionIds[sectionIds.length - 1]}`;
      }

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);

        if (section && section.offsetTop <= currentPosition) {
          nextHash = `#${id}`;
        }
      });

      return nextHash;
    };

    const updateActiveHash = () => {
      setActiveHash(getActiveHash());
    };

    updateActiveHash();
    window.addEventListener("scroll", updateActiveHash, { passive: true });
    window.addEventListener("resize", updateActiveHash);

    return () => {
      window.removeEventListener("scroll", updateActiveHash);
      window.removeEventListener("resize", updateActiveHash);
    };
  }, [navItems, sectionIds]);

  const languageHref = `/${targetLocale}${activeHash}`;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/78 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <NextLink
          href={locale === "en" ? "/" : "/es"}
          className="rounded-md text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label={labels.logo}
        >
          {profile.name}
        </NextLink>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              aria-current={activeHash === item.href ? "true" : undefined}
              key={item.href}
              href={item.href}
              onClick={() => setActiveHash(item.href)}
              className={cn(
                "relative rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                activeHash === item.href && "text-foreground"
              )}
            >
              {item.label}
              {activeHash === item.href ? (
                <span
                  aria-hidden="true"
                  className="absolute inset-x-3 -bottom-[13px] h-0.5 rounded-full bg-primary"
                />
              ) : null}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeControls
            labels={themeLabels}
            setTheme={setTheme}
            theme={theme}
            title={labels.theme}
          />
          <Button asChild size="sm" variant="secondary">
            <NextLink href={languageHref} aria-label={labels.language}>
              {targetLocale.toUpperCase()}
            </NextLink>
          </Button>
        </div>

        <Button
          aria-label={isOpen ? labels.close : labels.menu}
          aria-controls={mobileMenuId}
          aria-expanded={isOpen}
          className="lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          size="sm"
          type="button"
          variant="secondary"
        >
          {isOpen ? (
            <X aria-hidden="true" className="size-4" />
          ) : (
            <Menu aria-hidden="true" className="size-4" />
          )}
        </Button>
      </div>

      {isOpen ? (
        <div
          className="border-t border-border bg-background/96 px-6 py-5 shadow-soft lg:hidden"
          id={mobileMenuId}
        >
          <nav aria-label="Mobile primary" className="grid gap-2">
            {navItems.map((item) => (
              <a
                aria-current={activeHash === item.href ? "true" : undefined}
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                  activeHash === item.href && "bg-muted text-foreground"
                )}
                onClick={() => {
                  setActiveHash(item.href);
                  setIsOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <ThemeControls
              labels={themeLabels}
              setTheme={setTheme}
              theme={theme}
              title={labels.theme}
            />
            <Button asChild size="sm" variant="secondary">
              <NextLink
                aria-label={labels.language}
                href={languageHref}
                onClick={() => setIsOpen(false)}
              >
                {labels.language}: {targetLocale.toUpperCase()}
              </NextLink>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}

type ThemeControlsProps = Readonly<{
  labels: Record<(typeof themes)[number]["value"], string>;
  setTheme: (theme: ThemeOption) => void;
  theme: ThemeOption;
  title: string;
}>;

function ThemeControls({ labels, setTheme, theme, title }: ThemeControlsProps) {
  return (
    <div
      aria-label={title}
      className="inline-flex rounded-md border border-border bg-secondary p-1"
      role="group"
    >
      {themes.map((item) => {
        const Icon = item.icon;
        const isActive = theme === item.value;

        return (
          <button
            aria-label={labels[item.value]}
            aria-pressed={isActive}
            className={cn(
              "relative inline-flex size-8 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              isActive && "bg-background text-foreground shadow-sm"
            )}
            key={item.value}
            onClick={() => setTheme(item.value)}
            title={labels[item.value]}
            type="button"
          >
            <Icon aria-hidden="true" className="size-4" />
            {isActive ? (
              <Check
                aria-hidden="true"
                className="absolute -right-1 -top-1 size-3 rounded-full bg-primary text-primary-foreground"
              />
            ) : null}
          </button>
        );
      })}
    </div>
  );
}

export type { HeaderLabels, NavItem };
