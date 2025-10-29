import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import pkg from "pg";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, ".env") });

const { Pool } = pkg;

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: 5432,
  database: process.env.DB_NAME,
});

pool.query("SELECT NOW()", (err: any) => {
  if (err) {
    console.error("Database connection error:", err);
  } else {
    console.log("Database connected successfully");
    console.log("Environment variables loaded:", {
      DB_USER: process.env.DB_USER,
      DB_HOST: process.env.DB_HOST,
      DB_NAME: process.env.DB_NAME,
      DB_PORT: process.env.DB_PORT,
    });
  }
});

export default pool;
