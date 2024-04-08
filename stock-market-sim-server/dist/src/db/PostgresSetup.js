"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});
client.connect();
function createTables() {
    client.query(`CREATE TABLE IF NOT EXISTS user (
      id SERIAL PRIMARY KEY,
      username TEXT NOT NULL,
      password TEXT NOT NULL,
   )`);
    client.query(`CREATE TABLE IF NOT EXISTS auth_token (
      id SERIAL PRIMARY KEY,
      user_id INT REFERENCES user(id),
      token TEXT UNIQUE NOT NULL,
      expiration INT NOT NULL
   )`);
    client.query(`CREATE TABLE IF NOT EXISTS holding (
      id SERIAL PRIMARY KEY,
      user_id INT REFERENCES user(id),
      symbol TEXT NOT NULL,
      quantity INT NOT NULL,
      purchase_price DECIMAL NOT NULL
   )`);
    client.query(`CREATE TABLE IF NOT EXISTS transaction (
      id SERIAL PRIMARY KEY,
      user_id INT REFERENCES user(id),
      symbol TEXT NOT NULL,
      quantity INT NOT NULL,
      price DECIMAL NOT NULL,
      date DATE NOT NULL
   )`);
}
createTables();
exports.default = client;
