import type { Locale } from "@/i18n/routing";

type LocalizedText = Record<Locale, string>;

type SkillGroupSource = {
  title: LocalizedText;
  description: LocalizedText;
  items: string[];
};

type ExperienceSource = {
  role: LocalizedText;
  company: LocalizedText;
  period: LocalizedText;
  summary: LocalizedText;
  highlights: LocalizedText[];
};

export type ProfessionalContent = {
  about: {
    eyebrow: string;
    title: string;
    body: string[];
    facts: Array<{
      label: string;
      value: string;
    }>;
  };
  skills: {
    eyebrow: string;
    title: string;
    description: string;
    groups: Array<{
      title: string;
      description: string;
      items: string[];
    }>;
  };
  experience: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{
      role: string;
      company: string;
      period: string;
      summary: string;
      highlights: string[];
    }>;
  };
};

const skillGroups: SkillGroupSource[] = [
  {
    title: {
      en: "Frontend",
      es: "Frontend"
    },
    description: {
      en: "Interfaces, state, routing and component systems.",
      es: "Interfaces, estado, rutas y sistemas de componentes."
    },
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
  },
  {
    title: {
      en: "Backend",
      es: "Backend"
    },
    description: {
      en: "APIs, services and application logic.",
      es: "APIs, servicios y lógica de aplicación."
    },
    items: ["Node.js", "Express", "REST APIs", "Authentication"]
  },
  {
    title: {
      en: "Data",
      es: "Datos"
    },
    description: {
      en: "Relational modeling and practical data flows.",
      es: "Modelado relacional y flujos de datos prácticos."
    },
    items: ["PostgreSQL", "MySQL", "SQL Server", "SQL", "Prisma"]
  },
  {
    title: {
      en: "Delivery",
      es: "Entrega"
    },
    description: {
      en: "Version control, deployment and production-minded workflows.",
      es: "Control de versiones, despliegue y flujos orientados a producción."
    },
    items: ["Git", "GitHub", "Docker", "Vercel", "VPS"]
  },
  {
    title: {
      en: "Mobile",
      es: "Móvil"
    },
    description: {
      en: "Cross-platform product experiences when the project requires it.",
      es: "Experiencias multiplataforma cuando el proyecto lo requiere."
    },
    items: ["React Native", "Expo", "Mobile UI"]
  }
];

const experienceItems: ExperienceSource[] = [
  {
    role: {
      en: "Frontend Software Developer",
      es: "Desarrollador de Software Frontend"
    },
    company: {
      en: "SOFTLUTIONS - Sistemas Inteligentes",
      es: "SOFTLUTIONS - Sistemas Inteligentes"
    },
    period: {
      en: "Mar 2025 - Present",
      es: "Mar 2025 - Actualidad"
    },
    summary: {
      en: "Designs, builds, implements and maintains user interfaces for web applications and platforms, focusing on clear, responsive and reliable product experiences.",
      es: "Diseña, desarrolla, implementa y mantiene interfaces de usuario para aplicaciones y plataformas web, enfocándose en experiencias claras, responsivas y confiables."
    },
    highlights: [
      {
        en: "Builds reusable visual components, forms, administrative modules, dashboards and interface flows for internal and client-facing systems.",
        es: "Construye componentes visuales reutilizables, formularios, módulos administrativos, paneles de control y flujos de interfaz para sistemas internos y de clientes."
      },
      {
        en: "Connects frontend interfaces with backend services through APIs, handling requests, responses, validation, errors and data presentation.",
        es: "Integra interfaces frontend con servicios backend mediante APIs, gestionando peticiones, respuestas, validaciones, errores y presentación de datos."
      },
      {
        en: "Improves performance, browser and device compatibility, accessibility, stability, code quality and functional testing across assigned modules.",
        es: "Mejora rendimiento, compatibilidad entre navegadores y dispositivos, accesibilidad, estabilidad, calidad de código y pruebas funcionales en módulos asignados."
      }
    ]
  }
];

export function getProfessionalContent(locale: Locale): ProfessionalContent {
  return {
    about: {
      eyebrow: locale === "es" ? "Sobre mí" : "About me",
      title:
        locale === "es"
          ? "Desarrollo productos web completos, desde interfaz hasta datos."
          : "I build complete web products, from interface to data.",
      body:
        locale === "es"
          ? [
              "Soy desarrollador fullstack con experiencia creando aplicaciones web, paneles administrativos, plataformas operativas, servicios backend y bases de datos relacionales.",
              "En mi trabajo actual me desempeño como frontend, pero también he construido APIs con Express y trabajado con PostgreSQL, MySQL y SQL Server."
            ]
          : [
              "I am a fullstack developer with experience building web applications, admin dashboards, operational platforms, backend services and relational databases.",
              "My current role is frontend-focused, but I have also built APIs with Express and worked with PostgreSQL, MySQL and SQL Server."
            ],
      facts: [
        {
          label: locale === "es" ? "Enfoque" : "Focus",
          value: locale === "es" ? "Frontend" : "Frontend"
        },
        {
          label: locale === "es" ? "Stack" : "Stack",
          value: "Backend APIs"
        },
        {
          label: locale === "es" ? "Estado" : "Status",
          value: "SQL Databases"
        }
      ]
    },
    skills: {
      eyebrow: locale === "es" ? "Habilidades" : "Skills",
      title:
        locale === "es"
          ? "Habilidades"
          : "Skills",
      description: "",
      groups: skillGroups.map((group) => ({
        title: group.title[locale],
        description: group.description[locale],
        items: group.items
      }))
    },
    experience: {
      eyebrow: locale === "es" ? "Experiencia" : "Experience",
      title:
        locale === "es"
          ? "Experiencia"
          : "Experience",
      description: "",
      items: experienceItems.map((item) => ({
        role: item.role[locale],
        company: item.company[locale],
        period: item.period[locale],
        summary: item.summary[locale],
        highlights: item.highlights.map((highlight) => highlight[locale])
      }))
    }
  };
}
