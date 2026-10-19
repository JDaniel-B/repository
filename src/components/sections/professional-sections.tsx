import { Reveal } from "@/components/animation/reveal";
import type { ProfessionalContent } from "@/config/professional-content";

export function ExperienceSection({ content }: Readonly<{ content: ProfessionalContent }>) {
  return (
    <Reveal as="section" aria-labelledby="experience-title" className="border-y border-border px-5 py-16 sm:px-8 sm:py-20 lg:px-10" id="experience">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16">
          <div><p className="text-sm font-medium text-muted-foreground">{content.experience.eyebrow}</p><h2 id="experience-title" className="mt-2 text-3xl font-semibold tracking-[-0.035em]">{content.experience.title}</h2></div>
          <div>
            {content.experience.items.map((item) => (
              <article key={`${item.role}-${item.company}`}>
                <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-8">
                  <div><h3 className="text-2xl font-semibold tracking-[-0.025em] sm:text-3xl">{item.role}</h3><p className="mt-2 text-sm text-muted-foreground">{item.company}</p></div>
                  <p className="text-sm font-medium tabular-nums text-muted-foreground">{item.period}</p>
                </div>
                <p className="mt-7 max-w-3xl text-base leading-7">{item.summary}</p>
                <ul className="mt-7 grid gap-4 text-sm leading-6 text-muted-foreground md:grid-cols-3 md:gap-6">
                  {item.highlights.map((highlight) => <li className="border-t border-border pt-4" key={highlight}>{highlight}</li>)}
                </ul>
              </article>
            ))}
          </div>
      </div>
    </Reveal>
  );
}

export function ProfileSections({ content }: Readonly<{ content: ProfessionalContent }>) {
  return <>
    <Reveal as="section" aria-labelledby="about-title" className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16 lg:px-10" id="about">
      <div><p className="text-sm font-medium text-muted-foreground">{content.about.eyebrow}</p><h2 id="about-title" className="mt-2 text-3xl font-semibold tracking-[-0.035em]">{content.about.title}</h2></div>
      <div><div className="grid max-w-4xl gap-5 text-base leading-7 text-muted-foreground md:grid-cols-2">{content.about.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><dl className="mt-8 grid gap-5 border-t border-border pt-6 text-sm sm:grid-cols-3">{content.about.facts.map((fact) => <div key={fact.label}><dt className="text-muted-foreground">{fact.label}</dt><dd className="mt-1 font-medium">{fact.value}</dd></div>)}</dl></div>
    </Reveal>
    <Reveal as="section" aria-labelledby="skills-title" className="border-t border-border px-5 py-16 sm:px-8 sm:py-20 lg:px-10" id="skills">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16"><div><p className="text-sm font-medium text-muted-foreground">{content.skills.eyebrow}</p><h2 id="skills-title" className="mt-2 text-3xl font-semibold tracking-[-0.035em]">{content.skills.title}</h2></div><div className="grid gap-x-10 gap-y-8 md:grid-cols-2">{content.skills.groups.map((group) => <div key={group.title}><h3 className="font-semibold">{group.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{group.description}</p><p className="mt-3 text-sm leading-6">{group.items.join(" · ")}</p></div>)}</div></div>
    </Reveal>
  </>;
}
