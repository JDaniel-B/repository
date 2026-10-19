import NextLink from "next/link";
import Image from "next/image";
import { ArrowDown, Download, Mail, MapPin } from "lucide-react";
import { SiteHeader, type HeaderLabels, type NavItem } from "@/components/layout/site-header";
import { SiteFooter, type FooterContent } from "@/components/layout/site-footer";
import { HeroReveal } from "@/components/animation/hero-reveal";
import { ExperienceSection, ProfileSections } from "@/components/sections/professional-sections";
import { ProjectsSection } from "@/components/sections/projects-section";
import { Button } from "@/components/ui/button";
import type { ProfessionalContent } from "@/config/professional-content";
import type { ProjectsContent } from "@/config/projects-content";
import type { Profile } from "@/config/profile";

type HomePreviewContent = {
  locale: "en" | "es"; profile: Profile; professional: ProfessionalContent; projects: ProjectsContent;
  navigation: { header: HeaderLabels; items: NavItem[]; footer: FooterContent };
  eyebrow: string; title: string; description: string; primaryAction: string; primaryHref: string;
  secondaryAction: string; secondaryHref: string; contactAction: string; cvAction: string;
  visualLabel: string; stack: string[];
};

export function HomePreview({ content }: Readonly<{ content: HomePreviewContent }>) {
  const contactHref = content.profile.emailHref ?? `mailto:${content.profile.email}`;

  return (
    <>
      <SiteHeader labels={content.navigation.header} locale={content.locale} navItems={content.navigation.items} profile={{ name: content.profile.name }} />
      <main id="main-content">
        <section id="hero" className="mx-auto w-full max-w-6xl px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20 lg:px-10 lg:pb-28 lg:pt-24">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(17rem,0.65fr)] lg:items-end lg:gap-20">
            <HeroReveal>
              <div className="flex items-center gap-4">
                <span className="relative size-[72px] shrink-0 overflow-hidden rounded-full bg-secondary">
                  {content.profile.imageHref ? <Image alt={content.profile.name} fill priority sizes="72px" className="object-cover" src={content.profile.imageHref} /> : <span className="grid size-full place-items-center text-sm font-semibold">{content.profile.initials}</span>}
                </span>
                <div>
                  <p className="font-semibold leading-5">{content.profile.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">Fullstack Developer</p>
                </div>
              </div>
              <h1 className="mt-9 max-w-[15ch] text-[clamp(2.75rem,6vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.045em]">{content.title.replace("\n", " ")}</h1>
              <p className="mt-7 max-w-[62ch] text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">{content.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild><a href={content.primaryHref}>{content.primaryAction}<ArrowDown aria-hidden="true" className="size-4" /></a></Button>
                <Button asChild variant="secondary"><a href={content.profile.cvHref[content.locale]} download aria-label={content.cvAction}>{content.cvAction}<Download aria-hidden="true" className="size-4" /></a></Button>
              </div>
            </HeroReveal>
            <aside className="border-t border-border pt-6 text-sm lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0" aria-label={content.eyebrow}>
              <p className="font-medium">{content.eyebrow}</p>
              <p className="mt-3 leading-6 text-muted-foreground">{content.stack.join(" · ")}</p>
              {content.profile.location ? <p className="mt-5 flex items-center gap-2 text-muted-foreground"><MapPin aria-hidden="true" className="size-4" />{content.profile.location}</p> : null}
              {content.profile.email ? <a className="mt-3 inline-flex min-h-11 items-center gap-2 underline decoration-current/30 transition-colors duration-200 hover:text-primary hover:decoration-current" href={contactHref} target="_blank" rel="noreferrer"><Mail aria-hidden="true" className="size-4" />{content.contactAction}</a> : null}
            </aside>
          </div>
        </section>

        <ExperienceSection content={content.professional} />
        <ProjectsSection content={content.projects} />
        <ProfileSections content={content.professional} />
      </main>
      <SiteFooter content={content.navigation.footer} profile={content.profile} locale={content.locale} cvLabel={content.cvAction} />
    </>
  );
}

export type { HomePreviewContent };
