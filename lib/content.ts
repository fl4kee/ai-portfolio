export type Lang = "en" | "ru";

export type Role = {
  company: string;
  url: string;
  role: string;
  period: string;
  duration: string;
  tag: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export type SkillGroup = { label: string; items: string[] };

export type ProjectStatus = "inProgress" | "planned" | "live";
export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  status: ProjectStatus;
};

export type Stat = { value: string; label: string };

export type Site = {
  name: string;
  monogram: string;
  role: string;
  focus: string;
  location: string;
  status: string;
  tagline: string;
  intro: string;
  introExtra: string;

  // contacts (shared, but kept per-lang for convenience)
  email: string;
  telegram: string;
  telegramUrl: string;
  github: string;
  githubHandle: string;
  resumeUrl: string;

  ui: {
    nav: { about: string; journey: string; stack: string; work: string; contact: string };
    getInTouch: string;
    heroLetsTalk: string;
    heroViewJourney: string;
    heroResume: string;

    aboutEyebrow: string;
    aboutTitleLead: string;
    aboutTitleMuted: string;
    aboutEduLabel: string;

    journeyEyebrow: string;
    journeyTitleLead: string;
    journeyTitleMuted: string;
    journeyIntro: string;
    now: string;
    expand: string;
    collapse: string;

    stackEyebrow: string;
    stackTitleLead: string;
    stackTitleMuted: string;

    workEyebrow: string;
    workTitleLead: string;
    workTitleMuted: string;
    workIntro: string;
    statuses: Record<ProjectStatus, string>;

    contactEyebrow: string;
    contactTitleLead: string;
    contactTitleAccent: string;
    contactIntro: string;
    contactTelegram: string;
    contactEmail: string;
    footerBuilt: string;

    chat: {
      fab: string;
      title: string;
      subtitle: string;
      placeholder: string;
      send: string;
      greeting: string;
      starters: string[];
      error: string;
      rateLimit: string;
      disclaimer: string;
    };
  };

  stats: Stat[];
  journey: Role[];
  skills: SkillGroup[];
  education: { school: string; city: string; year: string; degree: string };
  projects: Project[];
};

// Shared, non-translatable bits
const contacts = {
  email: "flakeexe@gmail.com",
  telegram: "@xFlakeex",
  telegramUrl: "https://t.me/xFlakeex",
  github: "https://github.com/fl4kee",
  githubHandle: "fl4kee",
  resumeUrl: "/resume.pdf",
};

const stacks = {
  astra: ["Python", "Django", "DRF", "Celery", "RabbitMQ", "PostgreSQL", "React", "Docker", "Nginx", "S3", "n8n", "Grafana"],
  jetlend: ["Python", "Django", "DRF", "Pandas", "MySQL", "Swagger"],
  megafon: ["Python", "Django", "MySQL"],
};

const skillItems = {
  backend: ["Python", "Django", "Django REST Framework", "FastAPI", "aiohttp", "Celery", "RabbitMQ", "SQLAlchemy", "Alembic"],
  ai: ["OpenRouter", "LangChain", "RAG", "LLM assistants", "n8n", "Document processing"],
  data: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQL", "pandas"],
  frontend: ["React", "JavaScript", "Next.js"],
  infra: ["Docker", "Nginx", "CI/CD", "Linux", "Git", "Grafana"],
  quality: ["pytest", "mypy", "Ruff", "Code review"],
};

export const content: Record<Lang, Site> = {
  en: {
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
    introExtra:
      "I care about the unglamorous parts that make software trustworthy: static typing, tests that don't flake, observable systems and clean integrations. I've owned features from requirements analysis through release — and increasingly use LLMs and n8n to automate the work that shouldn't need a human.",
    ...contacts,
    ui: {
      nav: { about: "About", journey: "Journey", stack: "Stack", work: "Work", contact: "Contact" },
      getInTouch: "Get in touch",
      heroLetsTalk: "Let's talk",
      heroViewJourney: "View journey",
      heroResume: "résumé",
      aboutEyebrow: "About",
      aboutTitleLead: "Engineering that ships,",
      aboutTitleMuted: "end to end.",
      aboutEduLabel: "EDU",
      journeyEyebrow: "Career journey",
      journeyTitleLead: "Four years, three teams,",
      journeyTitleMuted: "one throughline.",
      journeyIntro:
        "From telecom tooling to fintech scoring to a B2B platform at the core of the Astra Linux ecosystem — each step deeper into ownership and systems that matter.",
      now: "Now",
      expand: "+ expand achievements",
      collapse: "− collapse",
      stackEyebrow: "Toolbox",
      stackTitleLead: "The stack I reach for",
      stackTitleMuted: "to ship fast and safe.",
      workEyebrow: "Selected work",
      workTitleLead: "Projects in the making",
      workTitleMuted: "— more soon.",
      workIntro:
        "This portfolio is itself a work in progress. Here's what's landing next — including the AI assistant that will answer for me right on this page.",
      statuses: { inProgress: "In progress", planned: "Planned", live: "Live" },
      contactEyebrow: "Let's build something",
      contactTitleLead: "Open to remote roles &",
      contactTitleAccent: "ambitious problems.",
      contactIntro:
        "Backend depth, an AI-automation edge, and a habit of owning things end to end. If that fits what you're building, let's talk.",
      contactTelegram: "Message on Telegram",
      contactEmail: "Send an email",
      footerBuilt: "Built with Next.js.",
      chat: {
        fab: "Ask my Digital Twin",
        title: "Digital Twin",
        subtitle: "Kirill's AI — ask about my career",
        placeholder: "Ask about my experience…",
        send: "Send",
        greeting:
          "Hey! I'm Kirill's digital twin. Ask me anything about his experience, projects or tech stack.",
        starters: [
          "What did you build at Astra Linux?",
          "What's your experience with AI?",
          "Why should we hire you?",
        ],
        error: "Something went wrong. Please try again.",
        rateLimit: "Too many messages — give it a minute and try again.",
        disclaimer: "AI-generated · may be imprecise",
      },
    },
    stats: [
      { value: "4+", label: "Years in production" },
      { value: "3", label: "Companies shipped at" },
      { value: "AI", label: "Automation focus" },
      { value: "C1", label: "English" },
    ],
    journey: [
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
        stack: stacks.astra,
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
        stack: stacks.jetlend,
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
        stack: stacks.megafon,
      },
    ],
    skills: [
      { label: "Backend", items: skillItems.backend },
      { label: "AI / LLM", items: skillItems.ai },
      { label: "Data", items: skillItems.data },
      { label: "Frontend", items: skillItems.frontend },
      { label: "Infra / DevOps", items: skillItems.infra },
      { label: "Quality", items: skillItems.quality },
    ],
    education: {
      school: "Volga Region State University of Service",
      city: "Togliatti",
      year: "2017",
      degree: "Higher education",
    },
    projects: [
      {
        title: "AI Portfolio Assistant",
        blurb:
          "A chat that answers as me — who I am, what I've built, how I work. Live on this page via an OpenRouter LLM proxy. Open the Digital Twin to try it.",
        tags: ["Next.js", "OpenRouter", "LLM"],
        status: "live",
      },
      {
        title: "Licensing Platform — Case Study",
        blurb:
          "A deep dive into the offline-activation architecture: HW-id binding, certificate chains and manifest generation for isolated networks.",
        tags: ["Django", "Microservices", "Security"],
        status: "planned",
      },
      {
        title: "Automation Playbook",
        blurb:
          "Reusable n8n workflows and Python glue for document ingestion, notifications and LLM-assisted ops — packaged and documented.",
        tags: ["n8n", "Python", "Automation"],
        status: "planned",
      },
    ],
  },

  ru: {
    name: "Кирилл Лебедев",
    monogram: "KL",
    role: "Python-разработчик",
    focus: "AI и автоматизация",
    location: "Москва · Удалённо",
    status: "Открыт к удалённой работе",
    tagline:
      "Собираю B2B-платформы end-to-end — от REST API и микросервисов до LLM-автоматизации, которая убирает рутину из процессов.",
    intro:
      "Fullstack-разработчик с опытом коммерческой разработки на Python 4+ года. Последние два года веду крупную B2B-платформу лицензирования в экосистеме Astra Linux — проектирую REST API, микросервисы, интеграции и систему уведомлений, от анализа до релиза. Всё больше смещаюсь в сторону AI: подключаю LLM-ассистентов, обрабатываю документы и автоматизирую процессы в n8n.",
    introExtra:
      "Мне важны неброские вещи, которые делают софт надёжным: статическая типизация, нефлакающие тесты, наблюдаемость и чистые интеграции. Веду фичи от анализа требований до релиза — и всё чаще автоматизирую с помощью LLM и n8n то, что не должно требовать человека.",
    ...contacts,
    ui: {
      nav: { about: "Обо мне", journey: "Путь", stack: "Стек", work: "Проекты", contact: "Контакты" },
      getInTouch: "Связаться",
      heroLetsTalk: "Поговорим",
      heroViewJourney: "Смотреть путь",
      heroResume: "резюме",
      aboutEyebrow: "Обо мне",
      aboutTitleLead: "Разработка, доведённая",
      aboutTitleMuted: "до конца.",
      aboutEduLabel: "ВУЗ",
      journeyEyebrow: "Карьерный путь",
      journeyTitleLead: "Четыре года, три команды,",
      journeyTitleMuted: "один вектор.",
      journeyIntro:
        "От телеком-инструментов к скорингу в финтехе и B2B-платформе в ядре экосистемы Astra Linux — каждый шаг глубже в ответственность и системы, которые действительно важны.",
      now: "Сейчас",
      expand: "+ раскрыть достижения",
      collapse: "− свернуть",
      stackEyebrow: "Инструменты",
      stackTitleLead: "Стек, к которому тянусь,",
      stackTitleMuted: "чтобы делать быстро и надёжно.",
      workEyebrow: "Проекты",
      workTitleLead: "Проекты в работе",
      workTitleMuted: "— скоро больше.",
      workIntro:
        "Это портфолио само в процессе. Вот что появится дальше — включая AI-ассистента, который будет отвечать за меня прямо на этой странице.",
      statuses: { inProgress: "В работе", planned: "В планах", live: "Готово" },
      contactEyebrow: "Давай что-нибудь сделаем",
      contactTitleLead: "Открыт к удалёнке и",
      contactTitleAccent: "амбициозным задачам.",
      contactIntro:
        "Глубокий бэкенд, уклон в AI-автоматизацию и привычка доводить дело до конца. Если это то, что ты строишь — давай поговорим.",
      contactTelegram: "Написать в Telegram",
      contactEmail: "Написать на почту",
      footerBuilt: "Сделано на Next.js.",
      chat: {
        fab: "Спросить цифрового двойника",
        title: "Цифровой двойник",
        subtitle: "AI Кирилла — спросите о карьере",
        placeholder: "Спросите о моём опыте…",
        send: "Отправить",
        greeting:
          "Привет! Я цифровой двойник Кирилла. Спрашивайте про опыт, проекты и стек.",
        starters: [
          "Что ты делал в Astra Linux?",
          "Какой у тебя опыт с AI?",
          "Почему стоит тебя нанять?",
        ],
        error: "Что-то пошло не так. Попробуйте ещё раз.",
        rateLimit: "Слишком много сообщений — подождите минуту и попробуйте снова.",
        disclaimer: "Сгенерировано AI · возможны неточности",
      },
    },
    stats: [
      { value: "4+", label: "Лет в продакшене" },
      { value: "3", label: "Компании за плечами" },
      { value: "AI", label: "Фокус — автоматизация" },
      { value: "C1", label: "Английский" },
    ],
    journey: [
      {
        company: "RusBITech-Astra",
        url: "https://astralinux.ru",
        role: "Старший разработчик",
        period: "Май 2024 — наст. время",
        duration: "2 года 2 мес",
        tag: "Экосистема Astra Linux",
        summary:
          "B2B-платформа лицензирования — личный кабинет клиентов и партнёров в ядре экосистемы Astra Linux. Веду end-to-end: бэкенд на Django/DRF, фронтенд на React, от анализа требований до релиза и сопровождения.",
        highlights: [
          "Разработал ключевые сценарии лицензирования и активации: онлайн- и офлайн-активация (ALSE, локальный сервер активации), привязка к HW-id, генерация манифестов активации, авторизация по клиентским сертификатам.",
          "Разрабатывал микросервисы и сервер лицензирования: выдача и обновление токенов, цепочки CA-сертификатов.",
          "Реализовал AI-функции и автоматизацию — загрузку PDF-документов в ИИ-ассистент, проектирование воркфлоу в n8n и прослойку между ИИ-ботом и фронтендом.",
          "Развивал систему уведомлений и почтовых рассылок: гибкие условия адресации, авто-уведомления о недоставке, консолидированные письма и управление подписками.",
          "Делал отчёты и выгрузки: «Статистика активации лицензий», экспорт в Excel/CSV, консолидированные отчёты по кабинетам, генерация и отображение PDF-лицензий и сертификатов.",
          "Настраивал интеграции с внешними системами: 1C, Jira, парсинг дистрибутивов из S3 и GitFlic, Pulp и Candlepin.",
          "Развивал многокабинетную модель: дочерние кабинеты, перенос, саморегистрация и разграничение прав доступа к API.",
          "Повышал качество кода: статическая типизация (mypy), Ruff, починка нестабильных тестов, оптимизация SQL, закрытие уязвимости CVE-2024-53861 и мониторинг в Grafana.",
        ],
        stack: stacks.astra,
      },
      {
        company: "JetLend",
        url: "https://jetlend.ru",
        role: "Backend-разработчик",
        period: "Фев 2022 — Май 2024",
        duration: "2 года 4 мес",
        tag: "Финтех · Кредитование",
        summary:
          "Финтех-платформа инвестиций и кредитования. Построил и масштабировал систему автоматизированного скоринга заёмщиков, на которой держится выдача каждого займа.",
        highlights: [
          "Разрабатывал и поддерживал систему скоринга заёмщиков на Python/Django/DRF.",
          "Интегрировал внешние источники данных: кредитную историю из БКИ, анализ арбитражных дел и других сигналов о заёмщике.",
          "Разработал внутренний сервис для отображения консолидированной информации о заёмщиках.",
          "Ускорил скоринг — кэширование в нереляционной БД и оптимизация запросов снизили объём обрабатываемых данных и время расчёта.",
          "Проводил код-ревью, оценку и декомпозицию задач; сопровождал SSL/TLS-сертификаты.",
        ],
        stack: stacks.jetlend,
      },
      {
        company: "MegaFon",
        url: "https://megafon.ru",
        role: "Python-разработчик",
        period: "Дек 2021 — Фев 2022",
        duration: "3 мес",
        tag: "Телеком",
        summary:
          "Внутренние fullstack-решения для автоматизации бизнес-процессов в одном из крупнейших операторов связи.",
        highlights: [
          "Дорабатывал и поддерживал внутренние fullstack-решения на Python/Django.",
          "Участвовал в разработке сервиса формирования платёжных поручений: доработки функционала, исправление багов, ведение документации.",
          "Проводил код-ревью.",
        ],
        stack: stacks.megafon,
      },
    ],
    skills: [
      { label: "Бэкенд", items: skillItems.backend },
      { label: "AI / LLM", items: skillItems.ai },
      { label: "Данные", items: skillItems.data },
      { label: "Фронтенд", items: skillItems.frontend },
      { label: "Инфра / DevOps", items: skillItems.infra },
      { label: "Качество", items: skillItems.quality },
    ],
    education: {
      school: "Поволжский государственный университет сервиса",
      city: "Тольятти",
      year: "2017",
      degree: "Высшее образование",
    },
    projects: [
      {
        title: "AI-ассистент портфолио",
        blurb:
          "Чат, который отвечает от моего лица — кто я, что делал, как работаю. Уже работает на этой странице через LLM-прокси на OpenRouter. Откройте «Цифрового двойника» и попробуйте.",
        tags: ["Next.js", "OpenRouter", "LLM"],
        status: "live",
      },
      {
        title: "Платформа лицензирования — кейс",
        blurb:
          "Разбор архитектуры офлайн-активации: привязка к HW-id, цепочки сертификатов и генерация манифестов для изолированных сетей.",
        tags: ["Django", "Микросервисы", "Безопасность"],
        status: "planned",
      },
      {
        title: "Плейбук автоматизации",
        blurb:
          "Переиспользуемые n8n-воркфлоу и Python-обвязка для обработки документов, уведомлений и LLM-ассистированных операций — упаковано и задокументировано.",
        tags: ["n8n", "Python", "Автоматизация"],
        status: "planned",
      },
    ],
  },
};

// Static fallback for server metadata
export const profile = content.en;
