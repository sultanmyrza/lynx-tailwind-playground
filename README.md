# Lynx Tailwind Playground 🚀  

Welcome to the Lynx Tailwind Playground! This project is an interactive space to explore and refine Tailwind CSS integration with Lynx, helping to build a more reliable styling ecosystem.  

I followed [Setting up Tailwind CSS with Lynx](https://gearboxgo.com/articles/tech-talk/setting-up-tailwind-with-lynx) (thanks @Smef! 🙌) and document each component’s styling. For example, if `components/MainContent.tsx` uses Lynx components (`view`, `text`, etc.) with Tailwind classes, I create `components/MainContent.md` with the same styles but using standard HTML (`div`, `span`, etc.).  

You can paste `MainContent.md` into [Tailwind Play](https://tailwindcss.com) (Tailwind v3) to compare how Lynx Tailwind styling differs from standard Tailwind.  

### Example Inconsistency  

https://github.com/user-attachments/assets/99eadc74-af7b-45d1-a17c-b2d104d18f10

**NOTE:** Lynx Tailwind (`@lynx-js/tailwind-preset-canary@0.0.2`) is in its early stages, so some inconsistencies are expected. Clear, reproducible examples help maintainers address issues faster. 🚀  

## Goals  
- 🎯 Test Tailwind in Lynx and document differences  
- 🔍 Compare `@lynx-js/tailwind-preset-canary` with standard Tailwind  
- 📝 Provide reproducible examples for maintainers  
- 🤝 Contribute feedback to improve Lynx Tailwind integration  

Let's make Lynx Tailwind even better together! 🚀 

## Rspeedy project

This is a ReactLynx project bootstrapped with `create-rspeedy`.

## Getting Started

First, install the dependencies:

```bash
bun install
```

Then, run the development server:

```bash
bun run dev
```

Scan the QRCode in the terminal with your LynxExplorer App to see the result.

You can start editing the page by modifying `src/App.tsx`. The page auto-updates as you edit the file.
