import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { DocumentLanguage } from "@/components/i18n/document-language";
import { siteConfig } from "@/config/site";
import { routing, type Locale } from "@/i18n/routing";

type LocaleLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}>;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: requestedLocale } = await params;

  if (!hasLocale(routing.locales, requestedLocale)) {
    return {
      title: siteConfig.title,
      description: siteConfig.description
    };
  }

  const locale = requestedLocale as Locale;
  const isSpanish = locale === "es";
  const metadata = siteConfig.locales[locale];
  const pathname = `/${locale}`;

  return {
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: pathname,
      languages: {
        en: "/en",
        es: "/es",
        "x-default": "/"
      }
    },
    openGraph: {
      type: "website",
      locale: isSpanish ? "es_GT" : "en_US",
      alternateLocale: [isSpanish ? "en_US" : "es_GT"],
      siteName: siteConfig.name,
      title: metadata.title,
      description: metadata.description,
      url: pathname
    },
    twitter: {
      card: "summary",
      title: metadata.title,
      description: metadata.description
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <DocumentLanguage locale={locale} />
      {children}
    </NextIntlClientProvider>
  );
}
