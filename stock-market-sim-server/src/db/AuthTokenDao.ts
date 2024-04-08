import client from './PostgresSetup'

async function putAuthToken(userId: number, token: string, expiration: number) {
   client.query<any>(`INSERT INTO auth_token (user_id, token, expiration) VALUES ($1, $2, $3)`,
      [userId, token, expiration]);
}

async function getAuthToken(token: string) {
   const res = await client.query<any>(`SELECT * FROM auth_token WHERE token = $1`,
      [token]);
   return res.rows[0];
}

async function deleteAuthToken(token: string) {
   client.query<any>(`DELETE FROM auth_token WHERE token = $1`,
      [token]);
}

export { putAuthToken, getAuthToken, deleteAuthToken }