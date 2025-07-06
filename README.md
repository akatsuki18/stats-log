# Stats Log - Admin Dashboard

A modern admin dashboard with Firebase Authentication integration. Built with React, TypeScript, and Shadcn/ui components for a seamless user experience.

![Stats Log Dashboard](public/images/shadcn-admin.png)

## ✨ Features

### 🔐 Authentication
- **Google OAuth** sign-in/sign-out
- **Real-time user data** display (name, email, avatar)
- **Protected routes** with authentication guards
- **Automatic redirects** after authentication
- **Session management** with Firebase

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

**Authentication:** [Firebase Authentication](https://firebase.google.com/products/auth)

**State Management:** [Zustand](https://zustand-demo.pmnd.rs/)

**Routing:** [TanStack Router](https://tanstack.com/router/latest)

**Build Tool:** [Vite](https://vitejs.dev/)

**Package Manager:** [pnpm](https://pnpm.io/)

**Icons:** [Tabler Icons](https://tabler.io/icons) + [Lucide React](https://lucide.dev/)

## 📋 Prerequisites

- Node.js 18+ and pnpm
- Firebase project with Authentication enabled
- Google OAuth credentials configured in Firebase Console

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

### 3. Firebase Configuration

1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable **Authentication** and add **Google** as a sign-in provider
3. Get your Firebase configuration from Project Settings

### 4. Environment Setup

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Add your Firebase configuration:

```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
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
│   ├── firebase.ts     # Firebase configuration
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