# Stats Log - Admin Dashboard

A modern admin dashboard with Supabase authentication integration. Built with React, TypeScript, and Shadcn/ui components for a seamless user experience.

## ✨ Features

### 🔐 Authentication

- **Google OAuth** sign-in/sign-out
- **Real-time user data** display (name, email, avatar)
- **Protected routes** with authentication guards
- **Automatic redirects** after authentication
- **Session management** with Supabase

### 🎨 UI/UX

- **Light/dark mode** toggle
- **Responsive design** for all devices
- **Accessible** components with proper ARIA support
- **Modern sidebar** with collapsible navigation
- **Global search** command palette
- **10+ pre-built pages**

### 🛠️ Technical Features

- **Type-safe** with TypeScript
- **Fast development** with Vite hot reload
- **State management** with Zustand
- **Modern routing** with TanStack Router
- **Form handling** with React Hook Form + Zod validation

## 🚀 Tech Stack

**Frontend:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)

**UI Framework:** [Shadcn/ui](https://ui.shadcn.com) (TailwindCSS + Radix UI)

**Authentication:** [Supabase Authentication](https://supabase.com/docs/guides/auth)

**State Management:** [Zustand](https://zustand-demo.pmnd.rs/)

**Routing:** [TanStack Router](https://tanstack.com/router/latest)

**Build Tool:** [Vite](https://vitejs.dev/)

**Package Manager:** [pnpm](https://pnpm.io/)

**Icons:** [Tabler Icons](https://tabler.io/icons) + [Lucide React](https://lucide.dev/)

## 📋 Prerequisites

- Node.js 18+ and pnpm
- Supabase project with Authentication enabled
- Google OAuth credentials configured in Supabase Dashboard

## 🛠️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/akatsuki18/stats-log.git
cd stats-log
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Supabase Configuration

1. Create a new Supabase project at [Supabase Dashboard](https://app.supabase.com/)
2. Enable **Authentication** and add **Google** as a sign-in provider
3. Get your Supabase configuration from Project Settings

### 4. Environment Setup

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Add your Supabase configuration:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 5. Start Development Server

```bash
pnpm run dev
```

Visit `http://localhost:5174` to see your application running!

## 🔥 Usage

### Authentication Flow

1. Navigate to `/sign-in`
2. Click the **Google** button
3. Complete Google OAuth authentication
4. Automatically redirected to dashboard
5. Your profile information (name, email, avatar) will be displayed
6. Use the **Log out** option in the profile dropdown to sign out

### Available Routes

- `/` - Dashboard (protected)
- `/sign-in` - Sign in page
- `/users` - User management (protected)
- `/tasks` - Task management (protected)
- `/settings` - User settings (protected)
- And more...

## 🏗️ Build for Production

```bash
pnpm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── features/           # Feature-based modules
├── hooks/              # Custom React hooks
├── lib/                # Utilities and configurations
│   ├── supabase.ts     # Supabase configuration
│   └── auth.ts         # Authentication utilities
├── stores/             # Zustand state stores
├── routes/             # Application routes
└── main.tsx           # Application entry point
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built on top of the excellent [Shadcn Admin Dashboard](https://github.com/satnaing/shadcn-admin) template by [@satnaing](https://github.com/satnaing)
- UI components from [Shadcn/ui](https://ui.shadcn.com)
- Icons from [Tabler Icons](https://tabler.io/icons) and [Lucide](https://lucide.dev)

## 📧 Contact

For questions or suggestions, feel free to open an issue or reach out!

---

**Stats Log** - Crafted with ❤️ for modern web development
