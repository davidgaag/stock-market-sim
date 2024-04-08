import client from './PostgresSetup.js';

async function putAuthToken(userId, token, expiration) {
   client.query(`INSERT INTO auth_token (user_id, token, expiration) VALUES ($1, $2, $3)`,
      [userId, token, expiration]);
}

async function getAuthToken(token) {
   const res = await client.query(`SELECT * FROM auth_token WHERE token = $1`,
      [token]);
   return res.rows[0];
}

async function deleteAuthToken(token) {
   client.query(`DELETE FROM auth_token WHERE token = $1`,
      [token]);
}

export { putAuthToken, getAuthToken, deleteAuthToken }