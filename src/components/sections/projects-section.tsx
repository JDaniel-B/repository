import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { MotionCard, Reveal } from "@/components/animation/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import type { ProjectsContent } from "@/config/projects-content";

type ProjectsSectionProps = Readonly<{
  content: ProjectsContent;
}>;

export function ProjectsSection({ content }: ProjectsSectionProps) {
  return (
    <Reveal
      as="section"
      aria-labelledby="projects-title"
      className="py-16"
      id="projects"
    >
      <div className="mb-8">
        <Badge variant="secondary">{content.eyebrow}</Badge>
        <h2 className="sr-only" id="projects-title">
          {content.title}
        </h2>
      </div>

      <div className="grid gap-3 lg:grid-cols-2">
        {content.items.map((project, index) => (
          <MotionCard delay={index * 0.05} key={project.slug}>
            <Card className="group flex h-full flex-col overflow-hidden border-border/70 bg-card/70 shadow-none transition-colors hover:border-primary/45">
              <CardHeader className="gap-5 p-5">
                <div className="flex items-start justify-between gap-4">
                  <p className="flex flex-wrap gap-x-2 gap-y-1 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </p>
                  <span
                    aria-hidden="true"
                    className="inline-flex size-8 shrink-0 items-center justify-center rounded-md border border-border bg-background/60 text-muted-foreground transition-colors group-hover:border-primary/45 group-hover:text-primary"
                  >
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
                <div>
                  <CardTitle className="text-xl leading-tight tracking-tight">
                    {project.title}
                  </CardTitle>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
                    {project.shortDescription}
                  </p>
                </div>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col gap-5 p-5 pt-0">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((technology) => (
                    <span
                      className="rounded-sm border border-border/80 px-2 py-1 text-xs font-medium text-muted-foreground"
                      key={technology}
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-2 border-t border-border/70 pt-5">
                  <Button asChild size="sm" variant="secondary">
                    <Link
                      href={
                        content.locale === "es"
                          ? `/es/projects/${project.slug}`
                          : `/projects/${project.slug}`
                      }
                    >
                      {content.caseStudyLabel}
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                    </Link>
                  </Button>

                  {project.liveHref ? (
                    <Button asChild size="sm" variant="ghost">
                      <a href={project.liveHref} rel="noreferrer" target="_blank">
                        {content.liveLabel}
                        <ExternalLink aria-hidden="true" className="size-4" />
                      </a>
                    </Button>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          </MotionCard>
        ))}
      </div>
    </Reveal>
  );
}
