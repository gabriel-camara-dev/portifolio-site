# Portfólio | Gabriel Câmara

Portfólio pessoal em React + Vite + TypeScript + Tailwind v4, seguindo o mesmo padrão dos meus
outros projetos: tokens de cor em CSS variables, tema claro/escuro persistido em `localStorage`,
Prettier sem ponto e vírgula e deploy na Vercel.

## Stack

- React 19 + TypeScript + Vite 7
- Tailwind CSS v4 (`@tailwindcss/postcss`)
- lucide-react para ícones
- ESLint + Prettier

## Rodar localmente

```bash
npm install
npm run dev
```

## Build

```bash
npm run build     # tsc -b && vite build → dist/
npm run preview   # serve o build local
npm run lint
```

## Deploy

O projeto já está pronto para a Vercel. O `vercel.json` faz o rewrite de todas as rotas para
`index.html`.

**Vercel (recomendado):**

1. Suba o repositório no GitHub.
2. Em vercel.com → _Add New → Project_ → importe o repositório.
3. Framework: **Vite** · Build Command: `npm run build` · Output: `dist`.
4. Deploy.

Ou pelo CLI:

```bash
npx vercel --prod
```

**Qualquer host estático** (Netlify, GitHub Pages, Cloudflare Pages): rode `npm run build` e publique
a pasta `dist/`. Em SPA, configure o fallback para `index.html`.

## Analytics

O site usa Vercel Web Analytics (`@vercel/analytics`), montado em [`src/App.tsx`](src/App.tsx). Ele
só coleta quando o site está rodando na Vercel, e é preciso ligar uma vez no painel do projeto, em
**Analytics > Enable**. Em desenvolvimento não envia nada.

## Onde editar o conteúdo

Todo o conteúdo do site (bio, projetos, experiências, skills e links) está centralizado em
[`src/data/profile.ts`](src/data/profile.ts). Para adicionar um projeto, basta acrescentar um item
no array `projects` (use `featured: true` para ele aparecer sem clicar em "ver mais").

Cores e tema ficam em [`src/global.css`](src/global.css), nas variáveis `--app-*` de `:root` e
`.dark`.
