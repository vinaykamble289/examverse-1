# ExamVerse - Online Examination Platform

A comprehensive full-stack examination management platform with AI-powered question generation, secure proctoring, payment integration, and advanced analytics.

## 🚀 Features

### Core Features
- **User Management**: Multi-role authentication system (Admin, Teacher, Student)
- **Exam Management**: Create, schedule, and manage exams with flexible settings
- **AI Question Generation**: Powered by Google Gemini AI for intelligent question creation
- **Real-time Proctoring**: Live monitoring with webcam, screen recording, and activity tracking
- **Payment Integration**: Secure payment processing for premium features
- **Advanced Analytics**: Comprehensive reporting and performance insights
- **Email Notifications**: Automated email system for exam updates and results

### Technical Features
- **Modern Stack**: React + TypeScript + Express + PostgreSQL
- **Real-time Updates**: WebSocket integration for live features
- **Secure Authentication**: JWT-based auth with bcrypt password hashing
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Responsive UI**: Built with Tailwind CSS and Radix UI components
- **Form Validation**: React Hook Form with Zod schema validation

## 📋 Prerequisites

- Node.js 20.x or higher
- PostgreSQL database (Supabase recommended)
- Google Gemini API key
- SMTP server for email notifications (optional)

## 🛠️ Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd examverse
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

Required environment variables:
- `DATABASE_URL`: Your Supabase PostgreSQL connection string
- `JWT_SECRET`: A secure random string for JWT signing
- `GEMINI_API_KEY`: Your Google Gemini API key
- `SMTP_*`: Email configuration (optional)

4. **Set up the database**

Push the database schema:
```bash
npm run db:push
```

5. **Start the development server**
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## 🗄️ Database Setup (Supabase)

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to Project Settings > Database
3. Copy the connection string (URI format)
4. Update `DATABASE_URL` in your `.env` file
5. Run `npm run db:push` to create tables

## 📦 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run check` - Type check with TypeScript
- `npm run db:push` - Push database schema changes

## 🏗️ Project Structure

```
examverse/
├── client/              # Frontend React application
│   ├── src/            # React components and pages
│   └── public/         # Static assets
├── server/             # Backend Express application
│   ├── db.ts          # Database configuration
│   ├── index.ts       # Server entry point
│   ├── routes.ts      # API routes
│   └── lib/           # Server utilities
├── shared/            # Shared types and schemas
│   └── schema.ts      # Database schema
└── .env               # Environment variables

```

## 🔐 Security Features

- Password hashing with bcrypt
- JWT-based authentication
- Session management
- SQL injection protection via Drizzle ORM
- Environment variable protection
- CORS configuration

## 🚀 Deployment

### Build for production
```bash
npm run build
```

### Start production server
```bash
npm start
```

### Environment Variables for Production
Ensure all environment variables are properly set:
- Set `NODE_ENV=production`
- Use a strong `JWT_SECRET`
- Configure production database URL
- Set up production SMTP credentials

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📝 License

MIT

## 🙏 Acknowledgments

- Built with React, Express, and PostgreSQL
- UI components from Radix UI
- Styling with Tailwind CSS
- AI powered by Google Gemini
- Database hosted on Supabase