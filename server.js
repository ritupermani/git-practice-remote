const pool = require("./config/db");

async function connectDB() {
  try {
    const connection = await pool.getConnection();
    console.log("MySQL connected successfully!");
    connection.release();
  } catch (error) {
    console.error("MySQL connection failed:", error.message);
  }
}

connectDB();