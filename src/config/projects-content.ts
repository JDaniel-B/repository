import type { Locale } from "@/i18n/routing";

type LocalizedText = Record<Locale, string>;

type ProjectMetricSource = {
  label: LocalizedText;
  value: string;
};

type ProjectSource = {
  slug: string;
  title: LocalizedText;
  category: LocalizedText;
  shortDescription: LocalizedText;
  problem: LocalizedText;
  contribution: LocalizedText;
  highlights: LocalizedText[];
  architecture: LocalizedText[];
  technologies: string[];
  metrics: ProjectMetricSource[];
  year: string;
  status: LocalizedText;
  featured?: boolean;
  liveHref?: string;
  repositoryHref?: string;
  repositoryPrivate?: boolean;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  problem: string;
  contribution: string;
  highlights: string[];
  architecture: string[];
  technologies: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  year: string;
  status: string;
  featured: boolean;
  liveHref?: string;
  repositoryHref?: string;
  repositoryPrivate?: boolean;
};

export type ProjectsContent = {
  locale: Locale;
  eyebrow: string;
  title: string;
  description: string;
  featuredLabel: string;
  problemLabel: string;
  contributionLabel: string;
  highlightsLabel: string;
  architectureLabel: string;
  stackLabel: string;
  liveLabel: string;
  caseStudyLabel: string;
  backLabel: string;
  repositoryLabel: string;
  privateRepositoryLabel: string;
  items: Project[];
};

const projectSources: ProjectSource[] = [
  {
    slug: "taller-automotriz",
    title: {
      en: "Taller Automotriz",
      es: "Taller Automotriz"
    },
    category: {
      en: "Automotive workshop platform",
      es: "Plataforma para taller automotriz"
    },
    shortDescription: {
      en: "Production system for workshop operations, inventory, finance, CRM and reporting.",
      es: "Sistema en producción para operaciones de taller, inventario, finanzas, CRM y reportes."
    },
    problem: {
      en: "The workshop needed to centralize workflows that usually live across paper, spreadsheets and disconnected tools: reception, diagnostics, parts, services, payments and customer follow-up.",
      es: "El taller necesitaba centralizar flujos que normalmente viven entre papel, hojas de cálculo y herramientas separadas: recepción, diagnóstico, repuestos, servicios, pagos y seguimiento al cliente."
    },
    contribution: {
      en: "Built a monorepo with a Next.js frontend and Express/MySQL API, including authentication, role permissions, operational modules, financial flows, public consultation, PDF output and dashboard KPIs.",
      es: "Construcción de un monorepo con frontend en Next.js y API Express/MySQL, incluyendo autenticación, permisos por rol, módulos operativos, flujos financieros, consulta pública, salida PDF y KPIs."
    },
    highlights: [
      {
        en: "Public site with services, vehicle consultation and login access for the operational platform.",
        es: "Sitio público con servicios, consulta de vehículo y acceso de inicio de sesión a la plataforma operativa."
      },
      {
        en: "Work-order lifecycle with services, products, spare parts, failures, inspections, photos, payments and progress tracking.",
        es: "Ciclo de órdenes de trabajo con servicios, productos, repuestos, fallas, inspecciones, fotos, pagos y seguimiento de proceso."
      },
      {
        en: "Reporting dashboard with operational summaries, status distribution, recent orders, ratings and low-stock visibility.",
        es: "Dashboard de reportes con resumen operativo, distribución de estados, órdenes recientes, valoraciones y visibilidad de bajo stock."
      }
    ],
    architecture: [
      {
        en: "Next.js frontend organized by public and protected dashboard areas.",
        es: "Frontend en Next.js organizado entre áreas públicas y dashboard protegido."
      },
      {
        en: "Express API split into auth, CRM, inventory, finance, operations, system and reports routes.",
        es: "API Express separada en rutas de autenticación, CRM, inventario, finanzas, operaciones, sistema y reportes."
      },
      {
        en: "MySQL-backed data model with validation schemas, file/photo handling and Azure Blob storage integration.",
        es: "Modelo de datos sobre MySQL con schemas de validación, manejo de archivos/fotos e integración con Azure Blob Storage."
      }
    ],
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "Express",
      "MySQL",
      "HeroUI",
      "Tailwind CSS",
      "Recharts",
      "Zod",
      "Azure Blob"
    ],
    metrics: [
      { label: { en: "Year", es: "Año" }, value: "2025" },
      { label: { en: "Type", es: "Tipo" }, value: "Full-stack" },
      { label: { en: "Status", es: "Estado" }, value: "Production" }
    ],
    year: "2025",
    status: {
      en: "Production system",
      es: "Sistema en producción"
    },
    featured: true,
    liveHref: "https://xn--tallerbolaos-jhb.com/",
    repositoryPrivate: true
  },
  {
    slug: "mazari-erp",
    title: {
      en: "Mazari ERP",
      es: "Mazari ERP"
    },
    category: {
      en: "Multi-branch shoe-store ERP",
      es: "ERP multisedes para zapatería"
    },
    shortDescription: {
      en: "SaaS ERP for a shoe-store operation with inventory, sales, purchases, finance and reports.",
      es: "ERP SaaS para zapatería con inventario, ventas, compras, finanzas y reportes."
    },
    problem: {
      en: "A shoe business with several branches needs precise stock visibility, sales control, cash sessions, accounts receivable/payable and branch-aware reporting without mixing data between companies.",
      es: "Una zapatería con varias sedes necesita visibilidad precisa de stock, control de ventas, sesiones de caja, cuentas por cobrar/pagar y reportería por sede sin mezclar datos entre empresas."
    },
    contribution: {
      en: "Designed and built a TypeScript monorepo with Next.js, Express, PostgreSQL and Drizzle, using opaque HttpOnly-cookie sessions, tenant-aware repositories, role permissions and module-based frontend architecture.",
      es: "Diseño y construcción de un monorepo TypeScript con Next.js, Express, PostgreSQL y Drizzle, usando sesiones opacas con cookie HttpOnly, repositorios con contexto de tenant, permisos por rol y arquitectura frontend por módulos."
    },
    highlights: [
      {
        en: "Multi-tenant model with company and branch context carried from the authenticated session.",
        es: "Modelo multi-tenant con contexto de empresa y sede tomado desde la sesión autenticada."
      },
      {
        en: "Inventory flows for shoe attributes such as size, color, brand, category and style, including transfers and low-stock states.",
        es: "Flujos de inventario para atributos de calzado como talla, color, marca, categoría y estilo, incluyendo traslados y bajo stock."
      },
      {
        en: "Finance modules for sales, purchases, cash sessions, receivables, payables, payroll, expenses and PDF-ready reports.",
        es: "Módulos financieros para ventas, compras, sesiones de caja, cuentas por cobrar, cuentas por pagar, planilla, gastos y reportes para PDF."
      }
    ],
    architecture: [
      {
        en: "Shared-database, shared-schema multi-tenancy using company and branch identifiers from the session.",
        es: "Multi-tenancy con base compartida y schema compartido usando empresa y sede desde la sesión."
      },
      {
        en: "Backend modules are organized by use-cases, repositories, validators, controllers and routes.",
        es: "Los módulos backend se organizan por casos de uso, repositorios, validadores, controladores y rutas."
      },
      {
        en: "Frontend uses TanStack Query, Zustand, shared resource tables and module-specific domain schemas.",
        es: "El frontend usa TanStack Query, Zustand, tablas compartidas de recursos y schemas de dominio por módulo."
      }
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Drizzle ORM",
      "TanStack Query",
      "Zustand",
      "Tailwind CSS",
      "Recharts",
      "Zod"
    ],
    metrics: [
      { label: { en: "Model", es: "Modelo" }, value: "SaaS ERP" },
      { label: { en: "Tenancy", es: "Tenancy" }, value: "Multi-company" },
      { label: { en: "Scope", es: "Alcance" }, value: "Multi-branch" }
    ],
    year: "2026",
    status: {
      en: "Production system",
      es: "Sistema en producción"
    },
    featured: true,
    liveHref: "https://mazari-ivory.vercel.app/",
    repositoryPrivate: true
  },
  {
    slug: "erp-repuestos",
    title: {
      en: "ERP Repuestos",
      es: "ERP Repuestos"
    },
    category: {
      en: "Auto-parts ERP",
      es: "ERP para repuestos"
    },
    shortDescription: {
      en: "Production ERP for selling auto parts, managing products, stock, equivalences, sales, purchases and finance.",
      es: "ERP en producción para venta de repuestos, gestionando productos, existencias, equivalencias, ventas, compras y finanzas."
    },
    problem: {
      en: "Auto-parts businesses need more than a generic inventory list: they need SKU control, product families, part brands, vehicle applications, equivalent products and financial workflows tied to real sales and purchases.",
      es: "Los negocios de repuestos necesitan más que un inventario genérico: requieren control de SKU, familias, marcas de repuesto, aplicaciones por vehículo, productos equivalentes y flujos financieros conectados con ventas y compras reales."
    },
    contribution: {
      en: "Adapted a TypeScript ERP architecture into a parts-focused system with Next.js, Express, PostgreSQL and Drizzle, aligning frontend schemas, backend DTOs and the database model around products, inventory and equivalence groups.",
      es: "Adaptación de una arquitectura ERP TypeScript a un sistema enfocado en repuestos con Next.js, Express, PostgreSQL y Drizzle, alineando schemas frontend, DTOs backend y modelo de base de datos alrededor de productos, inventario y grupos de equivalencia."
    },
    highlights: [
      {
        en: "Product catalog centered on SKU, family, category, part brand and part type instead of generic retail attributes.",
        es: "Catálogo de productos centrado en SKU, familia, categoría, marca de repuesto y tipo de repuesto en lugar de atributos genéricos de retail."
      },
      {
        en: "Equivalence groups connect interchangeable SKUs with vehicle models, years, engine details and application notes.",
        es: "Grupos de equivalencia conectan SKUs intercambiables con modelos de vehículo, años, detalles de motor y notas de aplicación."
      },
      {
        en: "Operational modules cover stock, quotes, sales receipts, purchases, cash sessions, receivables, payables and inventory reports.",
        es: "Módulos operativos cubren existencias, proformas, comprobantes de venta, compras, caja, cuentas por cobrar, cuentas por pagar y reportes de inventario."
      }
    ],
    architecture: [
      {
        en: "Next.js frontend with protected dashboard routes and shared resource-table primitives.",
        es: "Frontend en Next.js con rutas protegidas de dashboard y primitivas compartidas de tablas de recursos."
      },
      {
        en: "Express API organized into auth, products, inventory, equivalences, sales, purchases, finance, contacts, reports and system modules.",
        es: "API Express organizada en módulos de autenticación, productos, inventario, equivalencias, ventas, compras, finanzas, contactos, reportes y sistema."
      },
      {
        en: "PostgreSQL schema specialized for spare parts, central inventory and vehicle-model application groups.",
        es: "Schema PostgreSQL especializado para repuestos, inventario central y grupos de aplicación por modelo de vehículo."
      }
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Drizzle ORM",
      "TanStack Query",
      "Zustand",
      "React PDF",
      "Tailwind CSS",
      "Zod"
    ],
    metrics: [
      { label: { en: "Type", es: "Tipo" }, value: "ERP" },
      { label: { en: "Domain", es: "Dominio" }, value: "Auto parts" },
      { label: { en: "Status", es: "Estado" }, value: "Production" }
    ],
    year: "2026",
    status: {
      en: "Production system",
      es: "Sistema en producción"
    },
    featured: true,
    liveHref: "https://cn-repuestos.vercel.app/",
    repositoryPrivate: true
  },
  {
    slug: "amac-platform",
    title: {
      en: "AMAC Platform",
      es: "Plataforma AMAC"
    },
    category: {
      en: "Association website and admin system",
      es: "Sitio institucional y sistema administrativo"
    },
    shortDescription: {
      en: "Production site and dashboard for AMAC, managing members, events, workshops, directives and join requests.",
      es: "Sitio y dashboard en producción para AMAC, gestionando socios, eventos, talleres, directivas y solicitudes de unión."
    },
    problem: {
      en: "AMAC needed a public presence for the association and a private system to manage members, workshops, events, registrations, directives and membership workflows from one place.",
      es: "AMAC necesitaba presencia pública para la asociación y un sistema privado para gestionar socios, talleres, eventos, inscripciones, directivas y membresías desde un solo lugar."
    },
    contribution: {
      en: "Built a Next.js and Express TypeScript monorepo with a public marketing site, join form, authenticated dashboard, CRUD modules, image uploads, PDF reports and email-backed membership requests.",
      es: "Construcción de un monorepo TypeScript con Next.js y Express, sitio público, formulario de unión, dashboard autenticado, módulos CRUD, carga de imágenes, reportes PDF y solicitudes por correo."
    },
    highlights: [
      {
        en: "Public site communicates AMAC's mission and lets mechanics, workshops and students request membership.",
        es: "El sitio público comunica la misión de AMAC y permite que mecánicos, talleres y estudiantes soliciten membresía."
      },
      {
        en: "Dashboard modules manage members, member types, workshops, workshop assignments, events, registrations, directives and users.",
        es: "El dashboard gestiona socios, tipos de socio, talleres, asignaciones, eventos, inscripciones, directivas y usuarios."
      },
      {
        en: "PDF exports for member lists and event registrations, plus Azure Blob image handling for event and content assets.",
        es: "Exportaciones PDF para listados de socios e inscripciones a eventos, más manejo de imágenes con Azure Blob."
      }
    ],
    architecture: [
      {
        en: "Next.js app split into public routes and protected dashboard routes.",
        es: "App Next.js dividida entre rutas públicas y rutas protegidas de dashboard."
      },
      {
        en: "Express API protected by API keys and signed session cookies, with routes mounted both with and without /api for deployment compatibility.",
        es: "API Express protegida por API keys y cookies de sesión firmadas, con rutas montadas con y sin /api para compatibilidad de despliegue."
      },
      {
        en: "PostgreSQL persistence, Zod validation, Nodemailer join flow, Sharp image optimization and Azure Blob storage.",
        es: "Persistencia en PostgreSQL, validación con Zod, flujo de unión con Nodemailer, optimización de imágenes con Sharp y Azure Blob Storage."
      }
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Express",
      "PostgreSQL",
      "React Hook Form",
      "Zod",
      "React PDF",
      "Azure Blob",
      "Nodemailer",
      "Tailwind CSS"
    ],
    metrics: [
      { label: { en: "Type", es: "Tipo" }, value: "Institutional + Admin" },
      { label: { en: "Modules", es: "Módulos" }, value: "Members / Events" },
      { label: { en: "Status", es: "Estado" }, value: "Production" }
    ],
    year: "2026",
    status: {
      en: "Production system",
      es: "Sistema en producción"
    },
    featured: true,
    liveHref: "https://www.amac.org.gt/",
    repositoryPrivate: true
  }
];

export function getProjectSlugs() {
  return projectSources.map((project) => project.slug);
}

export function getProjectContent(slug: string, locale: Locale) {
  const project = projectSources.find((item) => item.slug === slug);

  if (!project) {
    return undefined;
  }

  return localizeProject(project, locale);
}

export function getProjectsContent(locale: Locale): ProjectsContent {
  return {
    locale,
    eyebrow: locale === "es" ? "Proyectos" : "Projects",
    title:
      locale === "es"
        ? "Proyectos"
        : "Projects",
    description: "",
    featuredLabel: locale === "es" ? "Destacado" : "Featured",
    problemLabel: locale === "es" ? "Problema" : "Problem",
    contributionLabel: locale === "es" ? "Participación" : "Contribution",
    highlightsLabel: locale === "es" ? "Puntos clave" : "Key points",
    architectureLabel: locale === "es" ? "Cómo está construido" : "How it is built",
    stackLabel: "Stack",
    liveLabel: locale === "es" ? "Ver proyecto" : "View live project",
    caseStudyLabel: locale === "es" ? "Detalles" : "Details",
    backLabel: locale === "es" ? "Volver al portafolio" : "Back to portfolio",
    repositoryLabel: locale === "es" ? "Repositorio" : "Repository",
    privateRepositoryLabel:
      locale === "es" ? "Repositorio privado" : "Private repository",
    items: projectSources.map((project) => localizeProject(project, locale))
  };
}

function localizeProject(project: ProjectSource, locale: Locale): Project {
  return {
    slug: project.slug,
    title: project.title[locale],
    category: project.category[locale],
    shortDescription: project.shortDescription[locale],
    problem: project.problem[locale],
    contribution: project.contribution[locale],
    highlights: project.highlights.map((highlight) => highlight[locale]),
    architecture: project.architecture.map((item) => item[locale]),
    technologies: project.technologies,
    metrics: project.metrics.map((metric) => ({
      label: metric.label[locale],
      value: metric.value
    })),
    year: project.year,
    status: project.status[locale],
    featured: project.featured ?? false,
    liveHref: project.liveHref,
    repositoryHref: project.repositoryHref,
    repositoryPrivate: project.repositoryPrivate
  };
}
