import NextLink from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import {
  SiteHeader,
  type HeaderLabels,
  type NavItem
} from "@/components/layout/site-header";
import { SiteFooter, type FooterContent } from "@/components/layout/site-footer";
import { Reveal } from "@/components/animation/reveal";
import { HeroVisual } from "@/components/sections/hero-visual";
import { ProfessionalSections } from "@/components/sections/professional-sections";
import { ProjectsSection } from "@/components/sections/projects-section";
import { Button } from "@/components/ui/button";
import type { ProfessionalContent } from "@/config/professional-content";
import type { ProjectsContent } from "@/config/projects-content";
import type { Profile } from "@/config/profile";

type HomePreviewContent = {
  locale: "en" | "es";
  profile: Profile;
  professional: ProfessionalContent;
  projects: ProjectsContent;
  navigation: {
    header: HeaderLabels;
    items: NavItem[];
    footer: FooterContent;
  };
  eyebrow: string;
  title: string;
  description: string;
  primaryAction: string;
  primaryHref: string;
  secondaryAction: string;
  secondaryHref: string;
  contactAction: string;
  visualLabel: string;
  stack: string[];
};

type HomePreviewProps = Readonly<{
  content: HomePreviewContent;
}>;

export function HomePreview({ content }: HomePreviewProps) {
  const contactHref = content.profile.emailHref ?? `mailto:${content.profile.email}`;

  return (
    <>
      <SiteHeader
        labels={content.navigation.header}
        locale={content.locale}
        navItems={content.navigation.items}
        profile={{
          name: content.profile.name
        }}
      />
      <main
        className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-10 pt-2 sm:pt-4"
        id="main-content"
      >
      <section
        className="grid min-h-[calc(100vh-5rem)] items-center gap-10 py-4 lg:grid-cols-[1.05fr_0.95fr]"
        id="hero"
      >
        <Reveal>
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="relative inline-flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border/80 bg-background text-sm font-semibold text-secondary-foreground shadow-[0_12px_32px_rgba(0,0,0,0.24)] ring-1 ring-white/5">
              {content.profile.imageHref ? (
                <Image
                  alt={content.profile.name}
                  className="object-cover"
                  fill
                  priority
                  sizes="64px"
                  src={content.profile.imageHref}
                />
              ) : (
                content.profile.initials
              )}
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              {content.eyebrow}
            </span>
          </div>
          <h1 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {content.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            {content.description}
          </p>
          {content.profile.location ? (
            <p className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin aria-hidden="true" className="size-4 text-primary" />
              {content.profile.location}
            </p>
          ) : null}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <a href={content.primaryHref}>
                {content.primaryAction}
                <ArrowRight aria-hidden="true" className="size-4" />
              </a>
            </Button>
            {content.profile.email ? (
              <Button asChild variant="secondary">
                <a href={contactHref} rel="noreferrer" target="_blank">
                  {content.contactAction}
                </a>
              </Button>
            ) : null}
            <Button asChild variant="secondary">
              <NextLink href={content.secondaryHref}>
                {content.secondaryAction}
              </NextLink>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <HeroVisual label={content.visualLabel} stack={content.stack} />
        </Reveal>
      </section>

      <ProfessionalSections content={content.professional} />
      <ProjectsSection content={content.projects} />
      </main>
      <SiteFooter content={content.navigation.footer} profile={content.profile} />
    </>
  );
}

export type { HomePreviewContent };
