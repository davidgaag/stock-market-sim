const client = require('./PostgresSetup.js');

async function putUser(username, password) {
   await client.query(`INSERT INTO app_user (username, password) VALUES ($1, $2)`,
      [username, password]);
}

async function getUser(username) {
   const res = await client.query(`SELECT * FROM app_user WHERE username = $1`,
      [username]);
   return res.rows[0];
}

module.exports = { putUser, getUser };