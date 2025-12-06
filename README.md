
# Workshop CIGRE CE B4 2026 - Landing Page

Website oficial do Workshop e Tutorial: **"HVDC e FACTS como Tecnologias Integradoras de Energias Renováveis"**.

Este projeto foi desenvolvido utilizando **React**, **TypeScript** e **Tailwind CSS**. Ele foi configurado para ser compatível tanto com visualização via CDN (para prototipagem rápida) quanto para build profissional utilizando **Vite**.

## 🚀 Tecnologias

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

## 📦 Como rodar localmente (Node.js)

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Rode o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Acesse `http://localhost:5173` no seu navegador.

## 🛠 Deploy (Vercel/Netlify)

Este projeto está pronto para deploy. O comando de build é:

```bash
npm run build
```

Os arquivos estáticos serão gerados na pasta `dist/`.

## 📁 Estrutura do Projeto

- **src/components**: Componentes React reutilizáveis (Header, Hero, Pricing, etc).
- **src/constants.ts**: Textos, valores de preços e dados do comitê.
- **index.html**: Ponto de entrada (configurado para suportar CDN e Modules).

---
Desenvolvido para o CIGRE-Brasil.
