# AI PR Reviewer 🚀

An intelligent web application that leverages AI to automate and enhance GitHub Pull Request reviews. Built with modern web technologies, this tool helps developers catch bugs, enforce coding standards, and improve code quality through automated AI feedback.

## ✨ Features

- **Automated Code Review:** Utilize AI to analyze pull requests for potential issues, code smells, and improvements.
- **Modern UI:** Clean, accessible, and highly customizable user interface built with Tailwind CSS and shadcn/ui.
- **Dark/Light Mode:** Full theme support out of the box using `next-themes`.
- **Efficient Data Fetching:** Powered by TanStack Query (React Query) for seamless API interactions and caching.
- **Fully Typed:** Written completely in TypeScript for robust and error-free development.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **State/Data Management:** [TanStack Query](https://tanstack.com/query/latest)
- **Package Manager:** [pnpm](https://pnpm.io/)

## 📂 Project Structure

```text
.
├── app/                  # Next.js App Router pages and layouts
├── components/           # Reusable UI components
│   ├── providers/        # React context providers (Theme, Query, etc.)
│   └── ui/               # shadcn/ui base components
├── hooks/                # Custom React hooks (e.g., use-mobile)
├── lib/                  # Utility functions and shared logic
├── public/               # Static assets (images, SVGs)
└── ...config files       # Next.js, TypeScript, Tailwind, and ESLint configurations

```

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/installation) (v8 or higher)

### Installation

1. **Clone the repository:**

```bash
git clone [https://github.com/anoop-rajoriya/ai-pr-reviewer.git](https://github.com/anoop-rajoriya/ai-pr-reviewer.git)
cd ai-pr-reviewer

```

2. **Install dependencies:**

```bash
pnpm install

```

3. **Set up Environment Variables:**
   Create a `.env.local` file in the root directory and add any necessary environment variables (e.g., AI Provider API keys, GitHub tokens).
   _(Note: Add specific required variables here as the project evolves)_
4. **Run the development server:**

```bash
pnpm dev

```

5. **Open the application:**
   Navigate to [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) in your browser to see the app running.

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## 📄 License

This project is licensed under the [MIT License](https://www.google.com/search?q=LICENSE).

---

_Built by [Anoop Rajoriya_](https://www.google.com/search?q=https://github.com/anoop-rajoriya)
