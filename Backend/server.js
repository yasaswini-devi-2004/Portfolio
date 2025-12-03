import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
const port = 5000;

dotenv.config();
// PostgreSQL Connection
const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

db.connect();

const info = await db.query(`
  SELECT 
    current_database() AS dbname,
    inet_server_addr() AS host,
    inet_server_port() AS port,
    current_user;
`);
console.log("Backend connected to:", info.rows[0]);

// Middlewares
app.use(cors());   // allow React frontend
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());   // accept JSON data
app.use(express.static("public"));
app.use(cors({ origin: "http://localhost:5173" }));

// ----------------------------------------------------
// GET all feedback (optional: admin use)
// ----------------------------------------------------
app.get("/feedback", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM feedback ORDER BY created_at DESC");
    res.json(result.rows);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error fetching feedback" });
  }
});

// ----------------------------------------------------
// POST feedback — save to DB
// ----------------------------------------------------
app.post("/feedback", async (req, res) => {
  try {
    console.log("POST /feedback body:", req.body);   // <--- log incoming body
    const { name, rating, answerDesign, answerContent, answerUsability } = req.body;

    if (!name || !rating) {
      return res.status(400).json({ message: "Name and rating required" });
    }

    const insertQuery = `
      INSERT INTO feedback (name, rating, answer_design, answer_content, answer_usability)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;

    const result = await db.query(insertQuery, [
      name,
      rating,
      answerDesign,
      answerContent,
      answerUsability,
    ]);

    console.log("Insert result.rows[0]:", result.rows[0]); // <-- important
    res.status(201).json({
      message: "Feedback submitted successfully",
      data: result.rows[0],
    });

  } catch (error) {
    console.error("Server error while saving feedback:", error);
    res.status(500).json({ message: "Server error while saving feedback" });
  }
});


// ----------------------------------------------------
// Start server
// ----------------------------------------------------
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
