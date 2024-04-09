import pkg from 'finnhub';
const finnhub = pkg;

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = process.env.FINNHUB_API_KEY;
const client = new finnhub.DefaultApi();

async function getQuote(symbol) {
   await client.quote(symbol, (error, data, response) => {
      if (error) {
         console.error(error);
         throw error;
      }
      console.log("Data: ", data);
      console.log("Response: ", response);
      return data;
   });
}

export { getQuote }