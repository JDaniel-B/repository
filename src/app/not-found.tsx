import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { profile } from "@/config/profile";

export default function NotFound() {
  const contactHref = profile.emailHref ?? `mailto:${profile.email}`;

  return (
    <main className="grid min-h-dvh place-items-center bg-background px-5 py-16 text-foreground sm:px-8">
      <section className="w-full max-w-5xl" aria-labelledby="not-found-title">
        <h1
          id="not-found-title"
          className="not-found-enter max-w-[12ch] text-[clamp(3.25rem,10vw,8rem)] font-semibold leading-[0.9] tracking-[-0.06em]"
        >
          This route is not part of the build.
        </h1>
        <p className="not-found-enter not-found-enter-delay mt-8 max-w-[58ch] text-lg leading-8 text-muted-foreground">
          The page may have moved or the address may be incomplete. Return to the portfolio or get in touch about a project.
        </p>
        <div className="not-found-enter not-found-enter-delay-2 mt-10 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center gap-2 rounded-sm bg-primary px-5 font-semibold text-primary-foreground transition-transform duration-150 active:scale-[0.98]"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            Back to portfolio
          </Link>
          <a
            href={contactHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-sm bg-secondary px-5 font-semibold transition-colors duration-150 hover:bg-accent"
          >
            <Mail aria-hidden="true" className="size-4" />
            Discuss a project
          </a>
        </div>
        <nav aria-label="Language" className="not-found-enter not-found-enter-delay-3 mt-16 flex gap-5 text-sm text-muted-foreground">
          <Link href="/en" className="hover:text-foreground hover:underline">English</Link>
          <Link href="/es" className="hover:text-foreground hover:underline">Español</Link>
        </nav>
      </section>
    </main>
  );
}
