const express = require("express");
const pool = require("./config/db");
require("dotenv").config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.get("/health", async (req, res) => {
  try {
    await pool.query("SELECT 1");
    res.status(200).json({
      status: "OK",
      message: "Server and database are running",
    });
  } catch (error) {
    res.status(500).json({
      status: "ERROR",
      message: "Database connection failed",
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



console.log("hreyy this line is foir cherry prsctice fro ritu as well i ")

console.log("Add some new features in this file") 

console.log("hlllllllllllooo cherrryyy broooooooo")

console.log("first cherry dude")

console.log("second cherry dude")

console.log("third cherry dude")