import pkg from 'finnhub';
const finnhub = pkg;

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = process.env.FINNHUB_API_KEY;
const client = new finnhub.DefaultApi();

function getQuote(symbol, callback) {
   client.quote(symbol, (error, data, response) => {
      if (error) {
         console.error(error);
         callback(error);
      } else {
         callback(null, data);
      }
   });
}

export { getQuote }