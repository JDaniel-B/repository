import type { Profile } from "@/config/profile";
import type { Locale } from "@/i18n/routing";

type FooterContent = { note: string; status?: string };
type SiteFooterProps = Readonly<{ content: FooterContent; profile: Profile; locale: Locale; cvLabel: string }>;

export function SiteFooter({ content, profile, locale, cvLabel }: SiteFooterProps) {
  const contactHref = profile.emailHref ?? `mailto:${profile.email}`;
  const links = [profile.github, profile.linkedin].filter((link) => link?.href);
  return (
    <footer className="border-t border-border bg-[var(--inverse)] px-5 py-8 text-[var(--inverse-foreground)] sm:px-8 lg:px-10 lg:py-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-7 sm:grid-cols-[1fr_auto] sm:items-start">
          <div><p className="text-sm text-[color:var(--inverse-muted)]">{content.note}</p><p className="mt-2 text-lg font-semibold">{profile.name}</p></div>
        {profile.email ? (
          <a href={contactHref} target="_blank" rel="noreferrer" className="break-all text-base font-medium underline decoration-current/30 transition-colors duration-200 hover:text-[var(--inverse-accent)] hover:decoration-current sm:break-normal">
            {profile.email}
          </a>
        ) : null}
        </div>
        <div className="mt-7 flex flex-col gap-4 border-t border-[color:var(--inverse-border)] pt-5 text-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {links.map((link) => <a key={link!.label} href={link!.href} target="_blank" rel="noreferrer" className="min-h-11 content-center underline decoration-current/30 hover:decoration-current">{link!.label}</a>)}
            <a href={profile.cvHref[locale]} download className="min-h-11 content-center underline decoration-current/30 hover:decoration-current" aria-label={cvLabel}>{cvLabel}</a>
          </div>
          <a href="#hero" className="min-h-11 content-center underline decoration-current/30 hover:decoration-current">{locale === "es" ? "Volver arriba" : "Back to top"}</a>
        </div>
      </div>
    </footer>
  );
}

export type { FooterContent };
