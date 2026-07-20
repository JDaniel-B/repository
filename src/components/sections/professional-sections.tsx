import { CheckCircle2 } from "lucide-react";
import { MotionCard, Reveal } from "@/components/animation/reveal";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import type { ProfessionalContent } from "@/config/professional-content";

type ProfessionalSectionsProps = Readonly<{
  content: ProfessionalContent;
}>;

export function ProfessionalSections({ content }: ProfessionalSectionsProps) {
  return (
    <>
      <Reveal
        as="section"
        aria-labelledby="about-title"
        className="grid gap-8 py-16 lg:grid-cols-[0.8fr_1.2fr]"
        id="about"
      >
        <div>
          <Badge variant="secondary">{content.about.eyebrow}</Badge>
          <h2
            className="sr-only"
            id="about-title"
          >
            {content.about.eyebrow}
          </h2>
          <p className="mt-4 max-w-md text-base font-semibold leading-7 text-foreground">
            {content.about.title}
          </p>
        </div>
        <div className="space-y-5">
          {content.about.body.map((paragraph) => (
            <p className="text-base leading-8 text-muted-foreground" key={paragraph}>
              {paragraph}
            </p>
          ))}
          <div className="grid gap-3 pt-3 sm:grid-cols-3">
            {content.about.facts.map((fact, index) => (
              <MotionCard delay={index * 0.05} key={fact.label}>
                <Card className="h-full border-border/70 bg-card/70 shadow-none">
                  <CardHeader className="h-full">
                    <CardDescription>{fact.label}</CardDescription>
                    <CardTitle className="text-base leading-6">
                      {fact.value}
                    </CardTitle>
                  </CardHeader>
                </Card>
              </MotionCard>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal
        as="section"
        aria-labelledby="skills-title"
        className="py-16"
        id="skills"
      >
        <div className="mb-8 max-w-2xl">
          <Badge variant="secondary">{content.skills.eyebrow}</Badge>
          <h2
            className="sr-only"
            id="skills-title"
          >
            {content.skills.title}
          </h2>
          {content.skills.description ? (
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              {content.skills.description}
            </p>
          ) : null}
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {content.skills.groups.map((group, index) => (
            <MotionCard delay={index * 0.04} key={group.title}>
              <Card className="flex h-full flex-col">
                <CardHeader className="min-h-32">
                  <CardTitle>{group.title}</CardTitle>
                  <CardDescription className="max-w-sm">
                    {group.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                        key={item}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </MotionCard>
          ))}
        </div>
      </Reveal>

      <Reveal
        as="section"
        aria-labelledby="experience-title"
        className="py-16"
        id="experience"
      >
        <div className="mb-8 max-w-2xl">
          <Badge variant="secondary">{content.experience.eyebrow}</Badge>
          <h2
            className="sr-only"
            id="experience-title"
          >
            {content.experience.title}
          </h2>
          {content.experience.description ? (
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              {content.experience.description}
            </p>
          ) : null}
        </div>
        <div className="space-y-4">
          {content.experience.items.map((item, index) => (
            <MotionCard delay={index * 0.05} key={`${item.role}-${item.company}`}>
              <Card>
                <CardHeader>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <CardTitle>{item.role}</CardTitle>
                      <CardDescription className="mt-2">
                        {item.company}
                      </CardDescription>
                    </div>
                    <Badge variant="outline">{item.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-7 text-muted-foreground">
                    {item.summary}
                  </p>
                  <ul className="mt-5 grid gap-3">
                    {item.highlights.map((highlight) => (
                      <li
                        className="flex gap-3 text-sm leading-6 text-muted-foreground"
                        key={highlight}
                      >
                        <CheckCircle2
                          aria-hidden="true"
                          className="mt-0.5 size-4 shrink-0 text-primary"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </MotionCard>
          ))}
        </div>
      </Reveal>
    </>
  );
}
