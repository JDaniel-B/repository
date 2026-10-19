import Link from "next/link";
import { ArrowLeft, ExternalLink, LockKeyhole } from "lucide-react";
import { Reveal } from "@/components/animation/reveal";
import { Button } from "@/components/ui/button";
import type { Project, ProjectsContent } from "@/config/projects-content";

export function ProjectDetail({ content, project }: Readonly<{ content: ProjectsContent; project: Project }>) {
  return (
    <main className="mx-auto min-h-[100dvh] w-full max-w-6xl px-5 py-7 sm:px-8 lg:px-10 lg:py-10">
      <Button asChild size="sm" variant="ghost"><Link href={content.locale === "es" ? "/es#projects" : "/#projects"}><ArrowLeft aria-hidden="true" className="size-4" />{content.backLabel}</Link></Button>

      <Reveal as="section" className="grid gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:py-20">
        <div><p className="text-sm text-muted-foreground">{project.category} · {project.year}</p><h1 className="mt-4 max-w-[14ch] text-[clamp(2.75rem,6vw,4.75rem)] font-semibold leading-[0.98] tracking-[-0.045em]">{project.title}</h1></div>
        <div><p className="text-lg leading-8 sm:text-xl">{project.shortDescription}</p><dl className="mt-8 grid grid-cols-3 gap-5">{project.metrics.map((metric) => <div key={`${metric.label}-${metric.value}`}><dt className="text-sm text-muted-foreground">{metric.label}</dt><dd className="mt-2 text-sm font-semibold">{metric.value}</dd></div>)}</dl></div>
      </Reveal>

      <Reveal as="section" className="grid gap-10 border-y border-border py-12 lg:grid-cols-2 lg:gap-16 lg:py-16">
        <DetailText title={content.problemLabel} value={project.problem} />
        <DetailText title={content.contributionLabel} value={project.contribution} />
      </Reveal>

      <Reveal as="section" className="grid gap-12 py-16 lg:grid-cols-2 lg:py-20">
        <DetailList title={content.highlightsLabel} items={project.highlights} />
        <DetailList title={content.architectureLabel} items={project.architecture} />
      </Reveal>

      <Reveal as="section" className="grid gap-10 border-t border-border pb-16 pt-12 lg:grid-cols-[1.25fr_0.75fr] lg:pb-20 lg:pt-16">
        <div><h2 className="text-2xl font-semibold tracking-[-0.03em]">{content.stackLabel}</h2><p className="mt-6 max-w-3xl text-lg leading-8">{project.technologies.join(" · ")}</p></div>
        <div className="flex flex-col items-start gap-3 lg:items-end">
          {project.liveHref ? <Button asChild><a href={project.liveHref} rel="noreferrer" target="_blank">{content.liveLabel}<ExternalLink aria-hidden="true" className="size-4" /></a></Button> : null}
          {project.repositoryHref ? <Button asChild variant="secondary"><a href={project.repositoryHref} rel="noreferrer" target="_blank">{content.repositoryLabel}<ExternalLink aria-hidden="true" className="size-4" /></a></Button> : project.repositoryPrivate ? <Button disabled variant="secondary">{content.privateRepositoryLabel}<LockKeyhole aria-hidden="true" className="size-4" /></Button> : null}
        </div>
      </Reveal>
    </main>
  );
}

function DetailText({ title, value }: { title: string; value: string }) { return <div><h2 className="text-2xl font-semibold tracking-[-0.03em]">{title}</h2><p className="mt-6 text-base leading-8 text-muted-foreground">{value}</p></div>; }
function DetailList({ title, items }: { title: string; items: string[] }) { return <div><h2 className="text-2xl font-semibold tracking-[-0.03em]">{title}</h2><ul className="mt-6 grid gap-5">{items.map((item) => <li key={item} className="border-t border-border pt-4 text-base leading-7 text-muted-foreground">{item}</li>)}</ul></div>; }
