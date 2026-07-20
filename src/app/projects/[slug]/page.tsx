import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/sections/project-detail";
import {
  getProjectContent,
  getProjectSlugs,
  getProjectsContent
} from "@/config/projects-content";

type ProjectPageProps = Readonly<{
  params: Promise<{
    slug: string;
  }>;
}>;

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectContent(slug, "en");

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.shortDescription
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectContent(slug, "en");

  if (!project) {
    notFound();
  }

  return (
    <ProjectDetail content={getProjectsContent("en")} project={project} />
  );
}
