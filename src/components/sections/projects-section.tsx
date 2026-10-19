import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/animation/reveal";
import type { ProjectsContent } from "@/config/projects-content";

export function ProjectsSection({ content }: Readonly<{ content: ProjectsContent }>) {
  return (
    <Reveal as="section" aria-labelledby="projects-title" className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10" id="projects">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-5 border-b border-border pb-8 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16">
          <h2 id="projects-title" className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">{content.title}</h2>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground lg:pt-1">{content.locale === "es" ? "Sistemas reales para operaciones, inventario, finanzas y gestión." : "Real systems for operations, inventory, finance and administration."}</p>
        </div>
        <div>
          {content.items.map((project) => (
            <article className="group grid gap-5 border-b border-border py-8 md:grid-cols-[minmax(12rem,0.65fr)_minmax(0,1.35fr)] md:gap-10" key={project.slug}>
              <div><p className="text-sm text-muted-foreground">{project.category} · {project.year}</p><h3 className="mt-2 text-2xl font-semibold tracking-[-0.025em] sm:text-3xl">{project.title}</h3></div>
              <div>
                <p className="max-w-2xl text-base leading-7">{project.shortDescription}</p>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">{project.technologies.slice(0, 7).join(" · ")}</p>
                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
                  <Link className="inline-flex min-h-11 items-center gap-2 underline decoration-current/30 transition-colors duration-200 hover:text-primary hover:decoration-current" href={content.locale === "es" ? `/es/projects/${project.slug}` : `/projects/${project.slug}`}>{content.caseStudyLabel}<ArrowUpRight aria-hidden="true" className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
                  {project.liveHref ? <a className="inline-flex min-h-11 items-center gap-2 underline decoration-current/30 transition-colors duration-200 hover:text-primary hover:decoration-current" href={project.liveHref} target="_blank" rel="noreferrer">{content.liveLabel}<ExternalLink aria-hidden="true" className="size-4" /></a> : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
