# Elysia with Bun Runtime

## Introduction

This project utilizes Bun as the runtime environment along with ElysiaJS, Prisma, and Postgres. It offers a streamlined development process and integrates well with Swagger for API documentation.

## Getting Started

### Installation

Begin by installing the necessary dependencies:

```bash
bun install
```

### Database Configuration

Add your database credentials to the .env file:

```dotenv
POSTGRES_PRISMA_URL="postgres://<username>:<password>@<host>:<port>/<database>?sslmode=require&pgbouncer=true&connect_timeout=15"
POSTGRES_URL_NON_POOLING="postgres://<username>:<password>@<host>:<port>/<database>?sslmode=require"
```

### Migration and Seeding

Run migration and seed scripts:

```bash
bunx prisma migrate dev
```
and

```bash
bunx prisma db seed
```

### Development Server

To start the development server run:

```bash
bun run dev
```

## Documentation

Swagger is used for API documentation, accessible at http://localhost:3000/swagger.

## Viewing the Application

Open http://localhost:3000/ with your browser to see the result.
