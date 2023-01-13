import dotenv from "dotenv";
import pkg from "pg";
const { Pool } = pkg;

dotenv.config();

export const connection = new Pool({
  host:'localhost',
  port: 5432,
  user: 'postgres',
  password: 'root',
  database: 'linkr'
});

/* {connectionString: process.env.DATABASE_URL /* 
ssl : true, */
