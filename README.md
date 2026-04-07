# Codehin

**Codehin** is a premium, full-stack code-sharing and execution platform designed for modern developers. It provides a seamless experience for writing, running, and sharing code snippets across multiple programming languages in real-time.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Convex](https://img.shields.io/badge/Backend-Convex-orange)
![Clerk](https://img.shields.io/badge/Auth-Clerk-purple)

## Features

- **Advanced Code Editor**: Integration with Monaco Editor featuring syntax highlighting, multiple themes, and a premium coding experience.
- **Live Code Execution**: Run code instantly in **10+ languages** including Python, JavaScript, Rust, Go, and more, powered by the Piston API.
- **Social Snippet Sharing**: Create, share, and discover code snippets from the community. Features include starring snippets and rich-text comments.
- **Real-time Synchronization**: Low-latency data updates and storage powered by Convex's reactive database.
- **Secure Authentication**: Robust user management and authentication using Clerk.
- **Pro Membership**: Integrated subscription system with SSLCommerz for premium features and enhanced limits.
- **Modern UI/UX**: Aesthetic dark-mode first design with smooth animations powered by Framer Motion.

## Tech Stack

- **Frontend**: [Next.js 15](https://nextjs.org/) (App Router), [React 19](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/)
- **Backend/Database**: [Convex](https://www.convex.dev/)
- **Authentication**: [Clerk](https://clerk.com/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/), [React Spring](https://www.react-spring.dev/)
- **Editor**: [Monaco Editor](https://microsoft.github.io/monaco-editor/)
- **Execution Engine**: [Piston API](https://github.com/engineer-man/piston)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm
- A Convex account
- A Clerk account

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Musa-Tur-Farazi/Codehin.git
   cd Codehin
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env.local` file in the root directory and add the following:
   ```env
   # Clerk
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
   CLERK_SECRET_KEY=your_secret_key

   # Convex
   CONVEX_DEPLOYMENT=your_convex_deployment_url
   NEXT_PUBLIC_CONVEX_URL=your_next_public_convex_url

   # SSLCommerz (Optional for Pro features)
   SSL_STORE_ID=your_store_id
   SSL_STORE_PASSWORD=your_store_password
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Run Convex functions:**
   ```bash
   npx convex dev
   ```

## Project Structure

```text
src/
├── app/            # Next.js App Router (pages and layouts)
├── components/     # Reusable UI components
├── hooks/          # Custom React hooks
├── store/          # Zustand state management
├── types/          # TypeScript definitions
└── convex/         # Backend schema and functions
```

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

Developed by [Musa-Tur-Farazi](https://github.com/Musa-Tur-Farazi)
