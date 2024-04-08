import client from "./PostgresSetup";

async function putUser(username: string, password: string) {
   await client.query(`INSERT INTO user (username, password) VALUES ($1, $2)`,
      [username, password]);
}

async function getUser(username: string) {
   const res = await client.query(`SELECT * FROM user WHERE username = $1`,
      [username]);
   return res.rows[0];
}

export { putUser, getUser };