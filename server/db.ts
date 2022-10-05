import { PoolConfig, Pool } from "pg";

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  port: 5433,
  database: "perntodo",
});
