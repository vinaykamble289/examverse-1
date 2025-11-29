import { defineConfig } from "drizzle-kit";

// Use DIRECT_URL for migrations (bypasses connection pooler)
// Use DATABASE_URL for runtime queries (uses connection pooler)
const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL or DIRECT_URL must be set");
}

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: connectionString,
  },
  verbose: true,
  strict: true,
});
