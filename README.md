# Lynx Tailwind Playground 🚀

Welcome to the Lynx Tailwind Playground! This project serves as an interactive testing ground for exploring Tailwind CSS integration with Lynx, helping us build a stronger and more reliable styling ecosystem for the Lynx community.

I followed [Setting up Tailwind CSS with Lynx](https://gearboxgo.com/articles/tech-talk/setting-up-tailwind-with-lynx) (special thanks to @Smef! 🙌).  

To better understand how Tailwind behaves in Lynx, I document each component with a corresponding README. For example, if I have `components/MainContent.tsx` using Lynx components like `view`, `text`, etc., with Tailwind classes, I create a `components/MainContent.md` file that contains the same Tailwind classes but applied to standard HTML elements like `div`, `span`, etc.  

You can paste `components/MainContent.md` into [Tailwind Play](https://tailwindcss.com) (Tailwind v3) to compare how Lynx Tailwind styling differs from standard Tailwind behavior.  

Here's an example of an inconsistency I noticed:  
https://github.com/user-attachments/assets/99eadc74-af7b-45d1-a17c-b2d104d18f10

**NOTE:** Lynx Tailwind is still in its early stages (aka `@lynx-js/tailwind-preset-canary`), so some inconsistencies are expected. The key is to provide clear, reproducible examples and well-structured issue reports to help maintainers fix them faster. 🚀  
```
## Project Goals

- 🎯 Explore and test Tailwind CSS functionality within the Lynx environment
- 🔍 Identify and document differences between standard Tailwind and `@lynx-js/tailwind-preset-canary`
- 📝 Create reproducible examples to help improve the Lynx Tailwind implementation
- 🤝 Contribute to the Lynx ecosystem by providing valuable feedback to maintainers

> **Note**: This project currently uses `@lynx-js/tailwind-preset-canary@0.0.2`. As we're in the early stages of Tailwind integration, you might notice some inconsistencies - this is expected and actually helps us improve! By documenting these differences, we can work together to enhance the Lynx Tailwind experience for everyone.

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
