
const mysql = require("mysql2/promise");
require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;

GPUBuffer,kklkbvgfcgvhbjkl

console.log("ye db file ko hum check kr rhe hai")

console.log("adding items in cart")

console.log("Checking the cart items")

console.log("selecting items from cart to purchase")

console.log("purchased the items I liked most")

console.log("debugging cherry pick for conflicts")

