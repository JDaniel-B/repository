import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { HomePreview, type HomePreviewContent } from "@/components/sections/home-preview";
import { getProfessionalContent } from "@/config/professional-content";
import { getProjectsContent } from "@/config/projects-content";
import { profile } from "@/config/profile";
import { routing, type Locale } from "@/i18n/routing";

type HomePageProps = Readonly<{
  params: Promise<{
    locale: string;
  }>;
}>;

export default async function HomePage({ params }: HomePageProps) {
  const { locale: rawLocale } = await params;

  if (!hasLocale(routing.locales, rawLocale)) {
    notFound();
  }

  const locale = rawLocale as Locale;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "home" });
  const tNav = await getTranslations({ locale, namespace: "navigation" });
  const targetLocale = locale === "es" ? "en" : "es";
  const content: HomePreviewContent = {
    locale,
    profile,
    professional: getProfessionalContent(locale),
    projects: getProjectsContent(locale),
    navigation: {
      header: {
        logo: tNav("header.logo"),
        menu: tNav("header.menu"),
        close: tNav("header.close"),
        language: tNav("header.language"),
        theme: tNav("header.theme"),
        light: tNav("header.light"),
        dark: tNav("header.dark"),
        system: tNav("header.system")
      },
      items: [
        { label: tNav("items.hero"), href: "#hero" },
        { label: tNav("items.about"), href: "#about" },
        { label: tNav("items.skills"), href: "#skills" },
        { label: tNav("items.experience"), href: "#experience" },
        { label: tNav("items.projects"), href: "#projects" }
      ],
      footer: {
        note: tNav("footer.note"),
        status: tNav("footer.status")
      }
    },
    eyebrow: t("eyebrow"),
    title: t("title"),
    description: t("description"),
    primaryAction: t("primaryAction"),
    primaryHref: t("primaryHref"),
    secondaryAction: t("secondaryAction"),
    secondaryHref: `/${targetLocale}`,
    contactAction: t("contactAction"),
    visualLabel: t("visualLabel"),
    stack: [
      t("stack.next"),
      t("stack.typescript"),
      t("stack.node"),
      t("stack.data")
    ]
  };

  return <HomePreview content={content} />;
}
