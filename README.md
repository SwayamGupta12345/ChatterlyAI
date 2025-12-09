# Chatterly — Full Multi-Service Open Source AI Chat Platform

Chatterly is a full-stack AI chat system built with a **Next.js frontend** and **three independent backend services**, deployed separately due to platform constraints (Vercel + Render free tiers).

This repository contains:
- The **official frontend**
- All **system documentation**
- Links to all backend microservices
- Setup guides for contributors

Live App → https://chatterlyai.vercel.app

---

## 📌 System Architecture
Chatterly consists of **4 repositories working together**:

| Service | Repo Link | Tech | Deploy |
|--------|-----------|------|--------|
| Frontend (Main) | https://github.com/SwayamGupta12345/chatterly | Next.js | Vercel |
| Backend API | https://github.com/SwayamGupta12345/chatterly-backend | Node.js | Render |
| Secondary Backend | https://github.com/SwayamGupta12345/chatterly-backend-2 | Node.js | Render |
| Agentic Backend | https://github.com/SwayamGupta12345/chatterly-agentic | Python/CrewAI | Render |

Full architecture → [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md)

---

## 🚀 Local Development

If you want to run everything locally:

### 1. Start Backend 1  
Follow instructions here:  
https://github.com/SwayamGupta12345/chatterly-backend

### 2. Start Backend 2  
https://github.com/SwayamGupta12345/chatterly-backend-2

### 3. Start Agentic Service  
https://github.com/SwayamGupta12345/chatterly-agentic

### 4. Start Frontend  

































# ChatterlyAI

[Live Demo](https://ChatterlyAI-delta.vercel.app)

ChatterlyAI is a web application project built with Next.js, JavaScript, TypeScript, and Tailwind CSS. It is designed to offer a robust, modern user experience, leveraging strong authentication and a rich component library.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Configuration](#configuration)
- [License](#license)

## Features

- **Authentication Middleware**: Custom JWT and NextAuth integration for secure access (`middleware.js`).
- **Component Library**: Uses shadcn/ui and Radix UI for accessible, customizable components.
- **Modern Styling**: Tailwind CSS with a custom configuration.
- **TypeScript Support**: Strong typing and modern JavaScript/TypeScript standards.
- **API Integration**: Ready for backend/API connections using Express, MongoDB, Mongoose, and Axios.
- **Easy Theming**: Next-themes and Tailwind for dark mode and theme customization.

## Project Structure

> Note: Only a partial file list is shown. For the full structure, see your repository on GitHub.

- `middleware.js` — Authentication logic for protected routes.
- `tailwind.config.ts` — Tailwind CSS configuration and theme extension.
- `next.config.mjs` — Next.js build and image config.
- `postcss.config.mjs` — PostCSS plugins for CSS processing.
- `package.json`, `package-lock.json`, `pnpm-lock.yaml` — Dependency and package management.
- `tsconfig.json` — TypeScript configuration for strict typing and path aliases.
- `components.json` — UI component library and alias setup.

Explore more files and folders in your [GitHub repository](https://github.com/rishugoyal805/ChatterlyAI).

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, JavaScript, Tailwind CSS, PostCSS
- **UI Libraries**: shadcn/ui, Radix UI, Lucide Icons
- **Backend/Server**: Express.js, MongoDB, Mongoose
- **Auth & Security**: NextAuth, JWT, bcryptjs
- **Other**: Axios, dotenv, framer-motion, and more

## Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/rishugoyal805/ChatterlyAI.git
cd ChatterlyAI
npm install    # or pnpm install
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Scripts

Common scripts from `package.json`:

- `dev` — Start development server
- `build` — Build the application
- `start` — Start the production server
- `lint` — Run linter

## Configuration

- Environment variables are required for JWT secret, database, and other integrations. Set them in a `.env` file.
- Adjust Tailwind styles in `tailwind.config.ts`.
- Modify Next.js settings in `next.config.mjs`.
- Extend or customize component aliases in `components.json`.

## License

This project is private and does not have a public license by default.

---

> **Note:** Only a subset of files is listed here. For more details, browse the repository directly on GitHub. 
