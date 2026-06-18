export const profile = {
  name: "Kirill Lebedev",
  monogram: "KL",
  role: "Python Engineer",
  focus: "AI & Automation",
  location: "Moscow · Remote",
  status: "Available for remote work",
  tagline:
    "I build B2B platforms end-to-end — from REST APIs and microservices to LLM-powered automation that takes the busywork out of the loop.",
  intro:
    "Fullstack-leaning Python engineer with 4+ years of commercial experience. For the last two years I've driven a large B2B licensing platform in the Astra Linux ecosystem — designing REST APIs, microservices, system integrations and notifications, from analysis all the way to release. Lately my focus has shifted toward AI: wiring up LLM assistants, document processing and process automation in n8n.",
  email: "flakeexe@gmail.com",
  telegram: "@xFlakeex",
  telegramUrl: "https://t.me/xFlakeex",
  github: "https://github.com/fl4kee",
  githubHandle: "fl4kee",
  resumeUrl: "/resume.pdf",
};

export const stats = [
  { value: "4+", label: "Years in production" },
  { value: "3", label: "Companies shipped at" },
  { value: "AI", label: "Automation focus" },
  { value: "C1", label: "English" },
];

export type Role = {
  company: string;
  url: string;
  role: string;
  period: string;
  duration: string;
  summary: string;
  highlights: string[];
  stack: string[];
  tag: string;
};

export const journey: Role[] = [
  {
    company: "RusBITech-Astra",
    url: "https://astralinux.ru",
    role: "Senior Software Engineer",
    period: "May 2024 — Present",
    duration: "2 yrs 2 mos",
    tag: "Astra Linux ecosystem",
    summary:
      "A B2B licensing platform — the client & partner cabinet at the heart of the Astra Linux ecosystem. I drive it end-to-end: Django/DRF backend, React frontend, from requirements to release and ongoing support.",
    highlights: [
      "Designed the core licensing & activation flows: online and offline activation (ALSE, local activation server), HW-id binding, activation-manifest generation and client-certificate auth.",
      "Built microservices and a licensing server: token issuance and rotation, CA certificate chains.",
      "Shipped AI features & automation — PDF ingestion into an LLM assistant, n8n workflow design, and an integration layer between the AI bot and the frontend.",
      "Developed a flexible notification & email system: conditional addressing, non-delivery alerts, consolidated digests and subscription management.",
      "Delivered reporting & exports: license-activation analytics, Excel/CSV export, consolidated cabinet reports, plus PDF license & certificate generation.",
      "Integrated external systems: 1C, Jira, distributive parsing from S3 & GitFlic, Pulp and Candlepin.",
      "Modeled a multi-cabinet hierarchy: child cabinets, migration, self-registration and API-level access control.",
      "Raised code quality: static typing (mypy), Ruff, stabilized flaky tests, optimized SQL, patched CVE-2024-53861 and set up Grafana monitoring.",
    ],
    stack: [
      "Python",
      "Django",
      "DRF",
      "Celery",
      "RabbitMQ",
      "PostgreSQL",
      "React",
      "Docker",
      "Nginx",
      "S3",
      "n8n",
      "Grafana",
    ],
  },
  {
    company: "JetLend",
    url: "https://jetlend.ru",
    role: "Backend Engineer",
    period: "Feb 2022 — May 2024",
    duration: "2 yrs 4 mos",
    tag: "Fintech · Lending",
    summary:
      "A fintech investment & lending platform. I built and scaled the automated borrower-scoring system that underwrites every loan.",
    highlights: [
      "Developed and maintained borrower scoring on Python/Django/DRF.",
      "Integrated external data sources: credit-bureau history, arbitration-case analysis and other borrower signals.",
      "Built an internal service surfacing consolidated borrower information.",
      "Accelerated scoring — NoSQL caching and query optimization cut both processed data volume and computation time.",
      "Ran code review, estimation and task decomposition; managed SSL/TLS certificates.",
    ],
    stack: ["Python", "Django", "DRF", "Pandas", "MySQL", "Swagger"],
  },
  {
    company: "MegaFon",
    url: "https://megafon.ru",
    role: "Python Developer",
    period: "Dec 2021 — Feb 2022",
    duration: "3 mos",
    tag: "Telecom",
    summary:
      "Internal fullstack tooling for business-process automation across one of Russia's largest telecom operators.",
    highlights: [
      "Built and maintained internal fullstack solutions on Python/Django.",
      "Contributed to a payment-order generation service: feature work, bug fixing and documentation.",
      "Performed code review.",
    ],
    stack: ["Python", "Django", "MySQL"],
  },
];

export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    label: "Backend",
    items: [
      "Python",
      "Django",
      "Django REST Framework",
      "FastAPI",
      "aiohttp",
      "Celery",
      "RabbitMQ",
      "SQLAlchemy",
      "Alembic",
    ],
  },
  {
    label: "AI / LLM",
    items: ["OpenRouter", "LangChain", "RAG", "LLM assistants", "n8n", "Document processing"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQL", "pandas"],
  },
  {
    label: "Frontend",
    items: ["React", "JavaScript", "Next.js"],
  },
  {
    label: "Infra / DevOps",
    items: ["Docker", "Nginx", "CI/CD", "Linux", "Git", "Grafana"],
  },
  {
    label: "Quality",
    items: ["pytest", "mypy", "Ruff", "Code review"],
  },
];

export const education = {
  school: "Volga Region State University of Service",
  city: "Togliatti",
  year: "2017",
  degree: "Higher education",
};

export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  status: "In progress" | "Planned" | "Live";
};

export const projects: Project[] = [
  {
    title: "AI Portfolio Assistant",
    blurb:
      "A chat that answers as me — who I am, what I've built, how I work — backed by an LLM proxy and (eventually) retrieval over my own data.",
    tags: ["Next.js", "OpenRouter", "RAG"],
    status: "In progress",
  },
  {
    title: "Licensing Platform — Case Study",
    blurb:
      "A deep dive into the offline-activation architecture: HW-id binding, certificate chains and manifest generation for isolated networks.",
    tags: ["Django", "Microservices", "Security"],
    status: "Planned",
  },
  {
    title: "Automation Playbook",
    blurb:
      "Reusable n8n workflows and Python glue for document ingestion, notifications and LLM-assisted ops — packaged and documented.",
    tags: ["n8n", "Python", "Automation"],
    status: "Planned",
  },
];
