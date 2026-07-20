"use client";

import { useEffect } from "react";
import type { Locale } from "@/i18n/routing";

type DocumentLanguageProps = Readonly<{
  locale: Locale;
}>;

export function DocumentLanguage({ locale }: DocumentLanguageProps) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
