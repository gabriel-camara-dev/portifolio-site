export const profile = {
  name: 'Gabriel Câmara',
  fullName: 'Gabriel do Câmara Castilho Alvares',
  role: 'Full Stack Developer',
  location: 'Rio de Janeiro, Brasil',
  education: 'Sistemas de Informação, UFF (2027)',
  avatar: 'https://avatars.githubusercontent.com/u/174543932?v=4',
  headline: 'Construo backends que aguentam produção e frontends que as pessoas conseguem usar.',
  summary: [
    'Desenvolvedor full stack focado em Node.js, NestJS, Fastify, React e bancos relacionais. Gosto de resolver o problema na camada certa: domínio isolado, casos de uso testáveis e infraestrutura substituível.',
    'Na prática isso vira Clean Architecture com DDD, use cases que retornam Result em vez de lançar exceção, repositórios abstratos como portas e Prisma/SQL só na borda. Testes com Vitest e Jest, do unitário ao e2e.',
    'Levo o código até o fim: deploy na Vercel com CI/CD no GitHub Actions, Docker para padronizar ambiente e observabilidade com Axiom para achar o problema antes do cliente. Também faço a parte que não é código: requisitos com cliente, definição de escopo e mentoria técnica.',
  ],
  links: {
    github: 'https://github.com/gabriel-camara-dev',
    linkedin: 'https://www.linkedin.com/in/gabriel-c%C3%A2mara-b68b01248/',
    email: 'galvares439@gmail.com',
    phone: '+55 (21) 99690-5176',
    whatsapp: 'https://wa.me/5521996905176',
  },
} as const

export type ProjectImage = {
  light: string
  dark: string
  alt: string
}

export type Project = {
  name: string
  year: string
  tagline: string
  description: string
  highlights: string[]
  stack: string[]
  repo: string
  live?: string
  image?: ProjectImage
  featured?: boolean
}

export const projects: Project[] = [
  {
    name: 'Onde Hoje',
    year: '2026',
    tagline: 'Plataforma de descoberta e gestão de eventos',
    description:
      'Produto fullstack para encontrar e organizar roles. Backend NestJS em Clean Architecture/DDD com schema Prisma multi-schema, cache Redis, autenticação Google OAuth e geocoding; frontend React com mapa, notificações em tempo real e tema claro/escuro.',
    highlights: [
      'Domínio separado da infra: entidades, use cases e repositórios abstratos sem import de framework',
      'Use cases retornam Result de erro ou sucesso, sem exceção para falha esperada',
      'Prisma multi-schema (users, places, groups, social, moderation) com client gerado no projeto',
      'Testes unitários co-locados e e2e rodando contra Postgres e Redis reais',
    ],
    stack: ['NestJS', 'Prisma', 'PostgreSQL', 'Redis', 'React', 'Vite', 'Tailwind', 'Vitest'],
    repo: 'https://github.com/gabriel-camara-dev/role-hoje',
    live: 'https://onde-hoje-frontend.vercel.app',
    image: {
      light: '/projects/onde-hoje-light.webp',
      dark: '/projects/onde-hoje-dark.webp',
      alt: 'Tela do Onde Hoje: mapa do Rio de Janeiro com os lugares votados e o painel de votação da semana ao lado.',
    },
    featured: true,
  },
  {
    name: 'Social Media API',
    year: '2025',
    tagline: 'Backend completo de rede social',
    description:
      'API de rede social com timeline, grafo de seguidores, comentários hierárquicos, reposts e curtidas. Upload de imagens com compressão via Sharp, notificações em tempo real por WebSocket e auditoria de login com IP e navegador.',
    highlights: [
      'JWT com refresh token e rate limiting após tentativas falhas de login',
      'Clean Architecture + Repository Pattern, use cases isolados por domínio',
      'Presenters padronizando todo o formato de resposta da API',
      'Compressão automática de imagem e limpeza de arquivos órfãos',
    ],
    stack: ['Fastify', 'Prisma', 'PostgreSQL', 'Socket.IO', 'Zod', 'Sharp', 'Vitest'],
    repo: 'https://github.com/gabriel-camara-dev/social-media-api-backend',
    featured: true,
  },
  {
    name: 'Gestão de Processos Jurídicos',
    year: '2025',
    tagline: 'Sistema fullstack para escritório de advocacia',
    description:
      'Sistema real em produção para gestão de processos previdenciários: upload e download de documentos, leitura de PDF, filtros avançados, paginação e autenticação por perfil de usuário.',
    highlights: [
      'NestJS + Prisma com adapter Postgres e documentação Swagger',
      'Extração de dados de PDF com pdfjs-dist',
      'Frontend React com React Query, React Hook Form + Zod e Zustand',
      'Deploy versionado com Docker Compose e PM2',
    ],
    stack: ['NestJS', 'Prisma', 'PostgreSQL', 'React', 'React Query', 'Docker'],
    repo: 'https://github.com/gabriel-camara-dev/eliana-lima-front',
    featured: true,
  },
  {
    name: 'Live Chat',
    year: '2025',
    tagline: 'Chat em tempo real com observabilidade',
    description:
      'Chat em tempo real com Socket.IO: confirmação de entrega das mensagens, indicador de digitação e um painel de logs para acompanhar os eventos do socket enquanto acontecem.',
    highlights: [
      'ACK de mensagens para garantir entrega',
      'Indicador de digitação e presença',
      'Painel de logs de eventos para debug',
    ],
    stack: ['React', 'Node.js', 'WebSocket', 'TypeScript'],
    repo: 'https://github.com/gabriel-camara-dev/live-chat',
    featured: true,
  },
  {
    name: 'Template Backend NestJS',
    year: '2026',
    tagline: 'Base production-ready para novos backends',
    description:
      'Template que uso para começar projetos NestJS sem repetir setup: arquitetura modular, autenticação JWT com Passport, validação com Zod, tratamento global de exceções e scripts de deploy prontos.',
    highlights: [
      'Prisma com adapter Postgres e schema modularizado',
      'Swagger, Biome, mise e Docker Compose já configurados',
      'Scripts de setup para Linux e Windows',
    ],
    stack: ['NestJS', 'Prisma', 'PostgreSQL', 'Zod', 'Swagger', 'Biome', 'Docker'],
    repo: 'https://github.com/gabriel-camara-dev/template-backend-nest',
  },
  {
    name: 'Template Backend Fastify',
    year: '2026',
    tagline: 'Backend DDD com Fastify e observabilidade',
    description:
      'Template Fastify em camadas core / domain / infra, com Sentry para monitoramento de erros, logs estruturados com Pino, envio de e-mail e validação de documentos brasileiros.',
    highlights: [
      'Estrutura core / domain / infra com mappers e presenters',
      'Sentry com profiling e logs estruturados com Pino',
      'Build com tsup e processo gerenciado por PM2',
    ],
    stack: ['Fastify', 'Prisma', 'PostgreSQL', 'Sentry', 'Pino', 'Zod'],
    repo: 'https://github.com/gabriel-camara-dev/backend-template-reborn',
  },
  {
    name: 'Template Frontend React',
    year: '2025',
    tagline: 'Base de frontend com autenticação pronta',
    description:
      'Template React + Vite + TypeScript com fluxo de autenticação JWT completo, refresh token via interceptador do Axios, estado global com Zustand e formulários validados com Zod.',
    highlights: [
      'Hooks useAuth, useRefreshToken e useAxiosPrivate',
      'React Hook Form + Zod em todos os formulários',
      'Socket.IO client já integrado à sessão',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Zustand', 'React Query', 'Zod'],
    repo: 'https://github.com/gabriel-camara-dev/template-frontend',
  },
  {
    name: 'Streamers Database',
    year: '2026',
    tagline: 'Modelagem relacional avançada em PostgreSQL',
    description:
      'Banco relacional para catalogar streamers, canais, vídeos, doações, membros e patrocinadores. Além do modelo, implementa procedures com cursor, functions, triggers, views materializadas e índices de apoio às consultas.',
    highlights: [
      'Procedures com cursor e functions de consulta analítica',
      'Views, materialized view, triggers e índices de suporte',
      'Sobe inteiro via Docker Compose com carga de dados automática',
    ],
    stack: ['PostgreSQL', 'PL/pgSQL', 'Docker'],
    repo: 'https://github.com/gabriel-camara-dev/projeto-bd2',
  },
]

export type Experience = {
  company: string
  role: string
  period: string
  current?: boolean
  bullets: string[]
}

export const experiences: Experience[] = [
  {
    company: '{IN}Júnior (Empresa Júnior da UFF)',
    role: 'Desenvolvedor Full Stack / Gerente de Projetos',
    period: 'Ago 2024 até hoje',
    current: true,
    bullets: [
      'Aplicações fullstack em TypeScript, Node.js, NestJS, Fastify, React, Next.js, Prisma e Supabase',
      'Deploy e operação em produção na Vercel, com CI/CD configurado no GitHub Actions',
      'Observabilidade e monitoramento com Axiom, acelerando a identificação de falhas',
      'Estruturação de testes automatizados com Vitest e Jest, reduzindo falhas em produção',
      'Integrações com serviços de terceiros: Asaas (pagamentos) e Brevo (e-mails)',
      'Ponte entre cliente e time técnico: reuniões, levantamento de requisitos e escopo',
      'Aulas e mentorias de backend na stack do projeto, formando novos membros',
    ],
  },
  {
    company: 'Mestra Informática e Tecnologia',
    role: 'Analista de Sistemas',
    period: 'Jan 2026 a Maio 2026',
    bullets: [
      'Backend corporativo em SQL Server e Oracle (PL/SQL)',
      'Criação e otimização de queries complexas, procedures, functions, triggers e views',
      'Suporte e evolução de sistemas legados, com foco em escalabilidade e estabilidade',
      'Levantamento de requisitos com as áreas de negócio, traduzindo demanda em solução técnica',
    ],
  },
]

export const skills = [
  {
    label: 'Frontend',
    items: ['React', 'Next.js', 'Angular', 'TypeScript', 'Tailwind', 'Vite', 'Zustand'],
  },
  {
    label: 'Backend',
    items: [
      'Node.js',
      'NestJS',
      'Fastify',
      'Express',
      'Prisma',
      'APIs REST',
      'Java',
      'Spring Boot',
    ],
  },
  {
    label: 'Dados',
    items: ['PostgreSQL', 'Supabase', 'SQL Server', 'Oracle PL/SQL', 'MongoDB', 'Redis'],
  },
  {
    label: 'Infra & DevOps',
    items: ['Linux', 'Git', 'Docker', 'GitHub Actions', 'CI/CD', 'Vercel'],
  },
  {
    label: 'Qualidade & Observabilidade',
    items: ['Vitest', 'Jest', 'ESLint', 'Axiom', 'Sentry'],
  },
  {
    label: 'Arquitetura & Processo',
    items: ['Clean Architecture', 'DDD', 'Repository Pattern', 'SOLID', 'Scrum', 'Kanban'],
  },
]
