# BRANICE Next.js Toolkit – Beginner’s Guide

## Project Title & Objective
**Title:** Getting Started with Next.js 13 + TailwindCSS – A Beginner’s Toolkit  
**Objective:** Learn Next.js 13 App Router and TailwindCSS, create a minimal running project with API route, and document the learning process.

## Quick Summary of the Technology
- **Next.js 13:** React framework for server-rendered and statically-generated apps with App Router and TypeScript support.  
- **TailwindCSS:** Utility-first CSS framework for rapid UI styling.  

**Real-world example:** Startups and SaaS apps often use Next.js + Tailwind for fast, scalable web apps with clean UI.

## System Requirements
- OS: Linux / Mac / Windows
- Editor: VS Code (recommended)
- Node.js v18+ and npm
- Packages: `next`, `react`, `react-dom`, `tailwindcss`

## Installation & Setup Instructions
1. Navigate to your workspace:

```bash
cd ~/Documents

2.Clone the repo (or extract ZIP):
git clone https://github.com/simaloibranice-boop/branice-nextjs-toolkit.git
cd branice-nextjs-toolkit

3.Install dependencies:
npm install

4.run the dev server:
npm run dev

5.Open in browser: http://localhost:3000
6.Click Test API → see interactive message box

PROJECT STRUCTURE
branice-nextjs-toolkit/
├─ app/
│  ├─ api/hello/route.ts    # Backend API
│  ├─ page.tsx              # Homepage + message box
│  ├─ layout.tsx            # Root layout
│  └─ globals.css           # Basic styling
├─ public/                  # Static files
├─ package.json
├─ tsconfig.json
├─ README.md
├─ AI_Journal.md

Features
✅ Fullstack: Frontend + API route
✅ Interactive UI with message box
✅ Clean state management
✅ TailwindCSS styling
✅ Ready for submission
Notes
API route uses App Router (app/api/hello/route.ts)
Message box auto-hides after 3 seconds
Success = green, Error = red

