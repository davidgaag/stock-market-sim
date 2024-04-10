import { parse } from 'dotenv';
import { getQuote } from '../../net/finnhub.js';
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

async function buyTransaction(user_id, symbol, shares) {
   try {
      await client.query('BEGIN');
      const cashBalance = parseAndRound((await getHolding(user_id, '$CASH$')).purchase_price);
      const stockPrice = parseAndRound((await getQuote(symbol)).c);
      if (!stockPrice) {
         throw new Error('Invalid symbol');
      }
      const currHolding = await getHolding(user_id, symbol);
      const totalCost = stockPrice * shares;
      if (cashBalance < totalCost) {
         throw new Error('Insufficient funds');
      }

      let newNumShares = shares;
      let newStockPrice = stockPrice;
      if (currHolding) {
         newNumShares += currHolding.quantity;
         if (currHolding.quantity > 0) {
            newStockPrice =
               ((currHolding.purchase_price * currHolding.quantity) + (stockPrice * shares))
               / newNumShares.toFixed(2); // TODO: will this cause an error?
         }
      }

      await updateHolding(user_id, '$CASH$', 0, cashBalance - totalCost);
      if (!currHolding) {
         await putHolding(user_id, symbol, shares, stockPrice);
      } else {
         await updateHolding(user_id, symbol, newNumShares, newStockPrice);
      }
      await client.query('COMMIT');
   } catch (error) {
      await client.query('ROLLBACK');
      throw error;
   }
}

async function sellTransaction(user_id, symbol, shares) {
   try {
      await client.query('BEGIN');

      const currHolding = await getHolding(user_id, symbol);
      if (!currHolding) {
         throw new Error('No shares to sell');
      } else if (currHolding.quantity < shares) {
         throw new Error('Insufficient shares');
      }

      const cashBalance = parseAndRound((await getHolding(user_id, '$CASH$')).purchase_price);
      const stockPrice = parseAndRound((await getQuote(symbol)).c);
      if (!stockPrice) {
         throw new Error('Invalid symbol');
      }
      const totalValue = stockPrice * shares;

      let newNumShares = currHolding.quantity - shares;
      let newStockPrice = currHolding.purchase_price;

      await updateHolding(user_id, '$CASH$', 0, cashBalance + totalValue);
      if (newNumShares === 0) {
         await client.query('DELETE FROM holding WHERE user_id = $1 AND symbol = $2', [user_id, symbol]);
      } else {
         await updateHolding(user_id, symbol, newNumShares, newStockPrice);
      }
      await client.query('COMMIT');
   } catch (error) {
      await client.query('ROLLBACK');
      throw error;
   }
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

function parseAndRound(num) {
   return Math.round((parseFloat(num) + Number.EPSILON) * 100) / 100;
}

export { putHolding, buyTransaction, sellTransaction, getHoldings }