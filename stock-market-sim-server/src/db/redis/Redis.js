import redis from 'redis';

const client = redis.createClient({
   url: process.env.REDIS_TLS_URL,
   socket: {
      tls: true,
      rejectUnauthorized: false,
      reconnectStrategy: function (retries) {
         if (retries >= 20) {
            return console.log("Too many atttempts to reconnect. Redis connection was terminated.");
         } else {
            return retries * 500;
         }
      }
   }
});

// TODO: to throw or not to throw?
client.on('error', (error) => {
   console.error(error);
});

await client.connect();

async function putStaticAssetData(symbol, data) {
   const fieldValues = Object.entries(data).flat();
   await client.hSet(`${symbol}:static`, fieldValues);
}

async function getStaticAssetData(symbol) {
   return await client.hGetAll(`${symbol}:static`);
}

async function putDynamicAssetData(symbol, data) {
   const fieldValues = Object.entries(data).flat();
   await client.hSet(`${symbol}:dynamic`, fieldValues);
   await client.expire(`${symbol}:dynamic`, 30);
}

async function getDynamicAssetData(symbol) {
   return await client.hGetAll(`${symbol}:dynamic`);
}

async function putAuthToken(authToken, userId) {
   await client.set(authToken, userId, { EX: 60 * 60 * 24 });
}

async function getAuthToken(authToken) {
   return await client.get(authToken);
}

async function deleteAuthToken(authToken) {
   await client.del(authToken);
}

export {
   putStaticAssetData,
   getStaticAssetData,
   putDynamicAssetData,
   getDynamicAssetData,
   putAuthToken,
   getAuthToken,
   deleteAuthToken
};