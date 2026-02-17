# Manee Web Wallet

A modern, secure, and user-friendly crypto wallet interface built with React and TypeScript.

![Manee Web Wallet](src/assets/logo/manee-logo.svg)

## Features

- **Smart Dashboard**: View real-time balance, frequent recipients, and transaction history at a glance.
- **Easy Transfers**: Send crypto to friends or addresses with a seamless flow.
- **Group Splitting**: Integrated chat and bill splitting for groups.
- **Secure Authentication**: OTP verification and secure onboarding flow.
- **Responsive Design**: Mobile-first architecture that works beautifully on all devices.

## Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Adeolu05/manee-web.git
   ```

2. Navigate to the project directory:
   ```bash
   cd manee-web
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
├── assets/         # Images, icons, and static assets
├── components/     # Reusable UI components
│   ├── auth/       # Authentication related components
│   ├── chat/       # Chat and messaging components
│   ├── group/      # Group management components
│   ├── layout/     # Layout wrappers (AppShell, BottomNav)
│   ├── ui/         # Base UI elements (Button, Card)
│   └── wallet/     # Wallet specific features (Balance, Transactions)
├── pages/          # Full page views (Home, Chat, Profile)
├── App.tsx         # Main application entry
└── main.tsx        # React DOM rendering
```

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
