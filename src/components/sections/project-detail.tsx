import Link from "next/link";
import { ArrowLeft, CheckCircle2, ExternalLink, LockKeyhole } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import type { Project, ProjectsContent } from "@/config/projects-content";

type ProjectDetailProps = Readonly<{
  content: ProjectsContent;
  project: Project;
}>;

export function ProjectDetail({ content, project }: ProjectDetailProps) {
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-6 py-10">
      <Button asChild size="sm" variant="ghost">
        <Link href={content.locale === "es" ? "/es#projects" : "/#projects"}>
          <ArrowLeft aria-hidden="true" className="size-4" />
          {content.backLabel}
        </Link>
      </Button>

      <section className="grid gap-10 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <div className="flex flex-wrap gap-2">
            <Badge>{project.status}</Badge>
            <Badge variant="secondary">{project.year}</Badge>
            <Badge variant="outline">{project.category}</Badge>
          </div>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            {project.title}
          </h1>
        </div>
        <div className="space-y-6">
          <p className="text-lg leading-8 text-muted-foreground">
            {project.shortDescription}
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {project.metrics.map((metric) => (
              <div
                className="rounded-md border border-border bg-card/80 p-4"
                key={`${metric.label}-${metric.value}`}
              >
                <p className="text-xs uppercase tracking-[0.16em] text-primary">
                  {metric.label}
                </p>
                <p className="mt-2 text-sm font-semibold">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <ProjectTextCard label={content.problemLabel} value={project.problem} />
        <ProjectTextCard
          label={content.contributionLabel}
          value={project.contribution}
        />
      </section>

      <section className="grid gap-5 py-5 lg:grid-cols-[0.95fr_1.05fr]">
        <Card>
          <CardHeader>
            <CardTitle>{content.highlightsLabel}</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3">
            {project.highlights.map((highlight) => (
              <DetailListItem key={highlight} value={highlight} />
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{content.architectureLabel}</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3">
            {project.architecture.map((item) => (
              <DetailListItem key={item} value={item} />
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-5 pb-12 lg:grid-cols-[1.15fr_0.85fr]">
        <Card>
          <CardHeader>
            <CardTitle>{content.stackLabel}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                  key={technology}
                >
                  {technology}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Links</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-2">
            {project.liveHref ? (
              <Button asChild>
                <a href={project.liveHref} rel="noreferrer" target="_blank">
                  {content.liveLabel}
                  <ExternalLink aria-hidden="true" className="size-4" />
                </a>
              </Button>
            ) : null}
            {project.repositoryHref ? (
              <Button asChild variant="secondary">
                <a href={project.repositoryHref} rel="noreferrer" target="_blank">
                  {content.repositoryLabel}
                  <ExternalLink aria-hidden="true" className="size-4" />
                </a>
              </Button>
            ) : project.repositoryPrivate ? (
              <Button disabled variant="secondary">
                {content.privateRepositoryLabel}
                <LockKeyhole aria-hidden="true" className="size-4" />
              </Button>
            ) : null}
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

type ProjectTextCardProps = Readonly<{
  label: string;
  value: string;
}>;

function ProjectTextCard({ label, value }: ProjectTextCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{label}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-base leading-8 text-muted-foreground">{value}</p>
      </CardContent>
    </Card>
  );
}

function DetailListItem({ value }: { value: string }) {
  return (
    <div className="flex gap-3 rounded-md border border-border bg-background/45 p-4">
      <CheckCircle2
        aria-hidden="true"
        className="mt-1 size-4 shrink-0 text-primary"
      />
      <p className="text-sm leading-7 text-muted-foreground">{value}</p>
    </div>
  );
}
