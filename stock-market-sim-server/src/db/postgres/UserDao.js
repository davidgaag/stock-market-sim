import client from './PostgresSetup.js';

async function putUser(username, password) {
   const res = await client.query(`INSERT INTO app_user (username, password) VALUES ($1, $2) RETURNING *`,
      [username, password]);
   return res.rows[0];
}

async function getUser(username) {
   const res = await client.query(`SELECT * FROM app_user WHERE username = $1`,
      [username]);
   return res.rows[0];
}

export { putUser, getUser }