import { Code2, Database, GitBranch, ServerCog } from "lucide-react";

type HeroVisualProps = Readonly<{
  label: string;
  stack: string[];
}>;

const visualItems = [
  { icon: Code2, label: "Frontend" },
  { icon: ServerCog, label: "Backend" },
  { icon: Database, label: "Data" },
  { icon: GitBranch, label: "Delivery" }
];

export function HeroVisual({ label, stack }: HeroVisualProps) {
  return (
    <div
      aria-label={label}
      className="relative overflow-hidden rounded-lg border border-border bg-card p-5 shadow-soft"
      role="img"
    >
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:26px_26px]" />
      <div className="relative rounded-md border border-border bg-background/68 p-4 backdrop-blur">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div className="flex gap-2" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-primary" />
            <span className="size-2.5 rounded-full bg-accent" />
            <span className="size-2.5 rounded-full bg-muted-foreground/40" />
          </div>
          <span className="font-mono text-xs text-muted-foreground">
            portfolio.tsx
          </span>
        </div>

        <pre className="overflow-hidden font-mono text-xs leading-6 text-muted-foreground sm:text-sm">
          <code>
            <span className="text-primary">const</span>{" "}
            <span className="text-foreground">focus</span> = [
            {"\n"}
            {"  "}
            <span className="text-accent">&quot;usable products&quot;</span>,
            {"\n"}
            {"  "}
            <span className="text-accent">&quot;clean systems&quot;</span>,
            {"\n"}
            {"  "}
            <span className="text-accent">&quot;reliable delivery&quot;</span>
            {"\n"}];
          </code>
        </pre>
      </div>

      <div className="relative mt-4 grid grid-cols-2 gap-3">
        {visualItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              className="rounded-md border border-border bg-background/54 p-3"
              key={item.label}
            >
              <Icon aria-hidden="true" className="mb-3 size-4 text-primary" />
              <p className="text-sm font-medium">{item.label}</p>
            </div>
          );
        })}
      </div>

      <div className="relative mt-4 flex flex-wrap gap-2">
        {stack.map((item) => (
          <span
            className="rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
            key={item}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
