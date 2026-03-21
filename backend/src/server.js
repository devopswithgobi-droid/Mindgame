import express from "express";
import pkg from "pg";

const { Pool } = pkg;

const app = express();

// Debug (temporary - remove later)
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_USER:", process.env.DB_USER);

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: 5432,
  ssl: { rejectUnauthorized: false }
});

app.get("/", (req, res) => {
  res.send("Backend running");
});

app.get("/api/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json(result.rows);
  } catch (err) {
    console.error("DB ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, "0.0.0.0", () => {
  console.log("Server running on 5000");
});