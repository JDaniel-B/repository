import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/sections/project-detail";
import {
  getProjectContent,
  getProjectSlugs,
  getProjectsContent
} from "@/config/projects-content";
import { routing, type Locale } from "@/i18n/routing";

type LocalizedProjectPageProps = Readonly<{
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}>;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getProjectSlugs().map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params
}: LocalizedProjectPageProps): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;

  if (!hasLocale(routing.locales, rawLocale)) {
    return {};
  }

  const locale = rawLocale as Locale;
  const project = getProjectContent(slug, locale);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.shortDescription
  };
}

export default async function LocalizedProjectPage({
  params
}: LocalizedProjectPageProps) {
  const { locale: rawLocale, slug } = await params;

  if (!hasLocale(routing.locales, rawLocale)) {
    notFound();
  }

  const locale = rawLocale as Locale;
  setRequestLocale(locale);
  const project = getProjectContent(slug, locale);

  if (!project) {
    notFound();
  }

  return (
    <ProjectDetail content={getProjectsContent(locale)} project={project} />
  );
}
