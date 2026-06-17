# Quetrex

Fullstack NextJS@latest Typescript, Tailwind CSS, App Router.

## Local Setup

### 1. PostgreSQL
Ensure you have PostgreSQL installed and running on your local machine. Create a database named `quetrex`.

### 2. Environment Configuration
Create a `.env.local` file in the root directory and add your database connection string:
```env
DATABASE_URL=postgres://user:password@localhost:5432/quetrex
```
Replace `user`, `password`, and `quetrex` with your actual PostgreSQL credentials and database name.

### 3. Database Setup
Run migrations to set up the schema and seed the database with mock data:
```bash
npm run db:migrate
npm run db:seed
```

### 4. Start Application
```bash
npm run dev
```
