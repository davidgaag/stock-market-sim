const { Client } = require('pg');

const client = new Client({
   connectionString: process.env.DATABASE_URL,
   ssl: {
      rejectUnauthorized: false
   }
});

client.connect();

function createTables() {
   client.query(`CREATE TABLE IF NOT EXISTS app_user (
      id SERIAL PRIMARY KEY,
      username TEXT NOT NULL,
      password TEXT NOT NULL,
   )`);

   client.query(`CREATE TABLE IF NOT EXISTS auth_token (
      id SERIAL PRIMARY KEY,
      user_id INT REFERENCES app_user(id),
      token TEXT UNIQUE NOT NULL,
      expiration INT NOT NULL
   )`);

   client.query(`CREATE TABLE IF NOT EXISTS holding (
      id SERIAL PRIMARY KEY,
      user_id INT REFERENCES app_user(id),
      symbol TEXT NOT NULL,
      quantity INT NOT NULL,
      purchase_price DECIMAL NOT NULL
   )`);

   client.query(`CREATE TABLE IF NOT EXISTS app_transaction (
      id SERIAL PRIMARY KEY,
      user_id INT REFERENCES app_user(id),
      symbol TEXT NOT NULL,
      quantity INT NOT NULL,
      price DECIMAL NOT NULL,
      date DATE NOT NULL
   )`);
}

module.exports = client;