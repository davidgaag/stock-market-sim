import client from './PostgresSetup.js';

// HOLDINGS

async function putHolding(user_id, symbol, quantity, purchase_price) {
   const res = await client.query(`
      INSERT INTO holding (user_id, symbol, quantity, purchase_price)
      VALUES ($1, $2, $3, $4) RETURNING *`,
      [user_id, symbol, quantity, purchase_price]
   );
   return res.rows[0];
}

async function updateHolding(user_id, symbol, quantity, purchase_price) {
   const res = await client.query(`
      UPDATE holding SET quantity = $1, purchase_price = $2 
      WHERE user_id = $3 AND symbol = $4 RETURNING *`,
      [quantity, purchase_price, user_id, symbol]
   );
   return res.rows[0];
}

async function getHoldings(user_id) {
   const res = await client.query(`
      SELECT * FROM holding WHERE user_id = $1`,
      [user_id]
   );
   return res.rows;
}

async function getHolding(user_id, symbol) {
   const res = await client.query(`
      SELECT * FROM holding WHERE user_id = $1 AND symbol = $2`,
      [user_id, symbol]
   );
   return res.rows[0];
}

export { putHolding, updateHolding, getHoldings, getHolding }