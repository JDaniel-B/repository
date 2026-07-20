export const siteConfig = {
  name: "Daniel Bolaños",
  title: "Fullstack Developer Portfolio",
  description: "Bilingual fullstack software developer portfolio.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locales: {
    en: {
      title: "Fullstack Developer Portfolio",
      description: "Bilingual fullstack software developer portfolio."
    },
    es: {
      title: "Portafolio de Desarrollador Fullstack",
      description: "Portafolio bilingüe de desarrollador de software fullstack."
    }
  }
};
