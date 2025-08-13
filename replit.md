# Overview

This is a full-stack web application built with React (TypeScript) frontend and Express.js backend for secure file management with user authentication. The application allows registered users to upload, manage, and download JSON files through a professional dashboard interface. It features PostgreSQL database storage, session-based authentication, and a modern UI built with shadcn/ui components and Tailwind CSS.

# User Preferences

Preferred communication style: Simple, everyday language.

# Recent Changes (August 2025)

✓ Added complete user authentication system with login/register
✓ Implemented session-based authentication with PostgreSQL storage  
✓ Created professional dashboard with sidebar navigation
✓ Added account management features (update username, email, password)
✓ Secure file operations tied to authenticated users
✓ Responsive design with mobile-friendly sidebar
✓ Database migration from in-memory to PostgreSQL with proper relations
✓ Restricted uploads to JSON files only with proper validation
✓ Implemented 10-file maximum limit per user with visual indicators
✓ Created beautiful visual JSON viewer for Mind Palace WPF data with structured cards, icons, and formatting

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Framework**: shadcn/ui components with Radix UI primitives and Tailwind CSS
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **Form Handling**: React Hook Form with Zod validation

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Authentication**: Session-based auth with bcrypt password hashing and PostgreSQL session store
- **File Handling**: Multer for multipart/form-data file uploads
- **Storage Strategy**: PostgreSQL database with proper user-file relationships and foreign key constraints
- **API Design**: RESTful endpoints with authentication middleware protection
- **Security**: Password hashing, session management, and protected routes

## Database Schema
- **Sessions Table**: PostgreSQL session storage for authentication
- **Users Table**: Complete user management with username, email, password (hashed), timestamps
- **Files Table**: File storage with user relationships, filename, content, file size, and upload timestamp
- **Relations**: Proper foreign key relationships between users and files with cascade delete
- **Schema Validation**: Drizzle-Zod integration for runtime type checking and form validation

## Development & Build Pipeline
- **Development**: Vite dev server with HMR and TypeScript checking
- **Build**: Vite for frontend bundling, esbuild for backend compilation
- **Database Migrations**: Drizzle Kit for schema management
- **Path Aliases**: Configured for clean imports (@/, @shared/, etc.)

# External Dependencies

## Database & ORM
- **PostgreSQL**: Primary database via Neon serverless connection
- **Drizzle ORM**: Type-safe database operations and schema management
- **Drizzle Kit**: Database migration and introspection tools

## UI & Styling
- **Radix UI**: Accessible, unstyled UI primitives for complex components
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Lucide React**: Icon library for consistent iconography
- **shadcn/ui**: Pre-built components following modern design patterns

## Development Tools
- **Vite**: Frontend build tool with React plugin and runtime error overlay
- **TypeScript**: Static type checking across the entire stack
- **Replit Integration**: Cartographer plugin for Replit-specific development features

## File Processing
- **Multer**: Express middleware for handling multipart/form-data uploads
- **Node.js fs**: File system operations for temporary file handling

## Utilities
- **Zod**: Runtime schema validation and type inference
- **clsx & tailwind-merge**: Conditional class name utilities
- **date-fns**: Date formatting and manipulation
- **nanoid**: Unique identifier generation