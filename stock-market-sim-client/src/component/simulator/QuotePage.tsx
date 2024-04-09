import { useState } from "react";
import { Quote } from "stock-market-sim-shared";
import useUserInfo from "../userInfo/UserInfoHook";
import { QuotePagePresenter, QuotePageView } from "../../presenter/QuotePagePresenter";
import useToastListener from "../toaster/ToastListenerHook";

const QuotePage = () => {
   const { displayErrorMessage } = useToastListener();
   const [quote, setQuote] = useState<Quote | null>(null);
   const [symbol, setSymbol] = useState("");

   const { authToken } = useUserInfo();

   const listener: QuotePageView = {
      displayErrorMessage: displayErrorMessage,
      setQuote: setQuote
   }

   const [presenter] = useState(() => new QuotePagePresenter(listener));

   const getQuote = async () => {
      presenter.getQuote(authToken!, symbol);
   }

   return (
      <div>
         <h1>Quote</h1>
         <div>
            <p>Enter a stock symbol to get a quote:</p>
            <input type="text" id="symbol" onChange={(event) => setSymbol(event.target.value)} />
            <button onClick={getQuote}>Get Quote</button>
         </div>
         {quote && (
            <div>
               <p>Symbol: {quote.symbol}</p>
               <p>Price: {quote.currentPrice}</p>
               <p>Change: {quote.change}</p>
               <p>Percent Change: {quote.percentChange}</p>
               <p>Daily High: {quote.dailyHigh}</p>
               <p>Daily Low: {quote.dailyLow}</p>
               <p>Open Price: {quote.openPrice}</p>
               <p>Previous Close: {quote.previousClose}
               </p>
            </div>
         )}
      </div >
   );
}

export default QuotePage;