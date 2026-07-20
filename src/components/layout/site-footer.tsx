import { FileText, Link2, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Profile } from "@/config/profile";

type FooterContent = {
  note: string;
  status?: string;
};

type SiteFooterProps = Readonly<{
  content: FooterContent;
  profile: Profile;
}>;

type FooterLink = {
  href?: string;
  icon: LucideIcon;
  label: string;
};

export function SiteFooter({ content, profile }: SiteFooterProps) {
  const links: FooterLink[] = [
    profile.github?.href
      ? {
          href: profile.github.href,
          icon: Link2,
          label: profile.github.label
        }
      : profile.github
        ? {
            icon: Link2,
            label: profile.github.label
          }
        : null,
    profile.linkedin?.href
      ? {
          href: profile.linkedin.href,
          icon: Link2,
          label: profile.linkedin.label
        }
      : profile.linkedin
        ? {
            icon: Link2,
            label: profile.linkedin.label
          }
        : null,
    profile.email
      ? {
          href: profile.emailHref ?? `mailto:${profile.email}`,
          icon: Mail,
          label: "Email"
        }
      : null,
    profile.cvHref
      ? {
          href: profile.cvHref,
          icon: FileText,
          label: "CV"
        }
      : null
  ].flatMap((link) => (link ? [link] : []));

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium text-foreground">{profile.name}</p>
          <p className="mt-1">{content.note}</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {links.map((link) => {
            const Icon = link.icon;

            return link.href ? (
              <a
                aria-label={link.label}
                className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/45 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                href={link.href}
                key={link.label}
                rel="noreferrer"
                target="_blank"
                title={link.label}
              >
                <Icon aria-hidden="true" className="size-4" />
                <span>{link.label}</span>
              </a>
            ) : (
              <span
                aria-disabled="true"
                className="inline-flex items-center gap-2 rounded-md border border-border/60 px-3 py-2 text-xs font-medium text-muted-foreground/55"
                key={link.label}
                title="Add href in src/config/profile.ts"
              >
                <Icon aria-hidden="true" className="size-4" />
                <span>{link.label}</span>
              </span>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export type { FooterContent };
