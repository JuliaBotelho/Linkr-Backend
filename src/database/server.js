import dotenv from "dotenv";
import pkg from "pg";
const { Pool } = pkg;

dotenv.config();

export const connection = new Pool({
  connectionString: process.env.DATABASE_URL,
});
