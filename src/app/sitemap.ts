import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: siteConfig.url,
      lastModified: now,
      alternates: {
        languages: {
          en: `${siteConfig.url}/en`,
          es: `${siteConfig.url}/es`,
          "x-default": siteConfig.url
        }
      }
    },
    {
      url: `${siteConfig.url}/en`,
      lastModified: now,
      alternates: {
        languages: {
          en: `${siteConfig.url}/en`,
          es: `${siteConfig.url}/es`,
          "x-default": siteConfig.url
        }
      }
    },
    {
      url: `${siteConfig.url}/es`,
      lastModified: now,
      alternates: {
        languages: {
          en: `${siteConfig.url}/en`,
          es: `${siteConfig.url}/es`,
          "x-default": siteConfig.url
        }
      }
    }
  ];
}
