import { useState } from "react";
import { TradePresenter, TradeType, TradeView } from "../../presenter/TradePresenter";
import useToastListener from "../toaster/ToastListenerHook";
import useUserInfo from "../userInfo/UserInfoHook";

const Trade = () => {
   const { displayErrorMessage, displayInfoMessage, clearLastInfoMessage } = useToastListener();
   const [symbol, setSymbol] = useState("");
   const [shares, setShares] = useState(0);
   const [tradeType, setTradeType] = useState(TradeType.Buy);

   const { authToken } = useUserInfo();

   const listener: TradeView = {
      displayErrorMessage: displayErrorMessage,
      displayInfoMessage: displayInfoMessage,
      clearLastInfoMessage: clearLastInfoMessage
   }

   const [presenter] = useState(() => new TradePresenter(listener));

   const trade = async () => {
      presenter.trade(authToken!, tradeType, symbol, shares);
      setSymbol("");
      setShares(0);
   }

   return (
      <div>
         <h1>Trade</h1>
         <label>
            Symbol:
            <input type="text" onChange={e => setSymbol(e.target.value)} />
         </label>
         <label>
            Shares:
            <input type="number" onChange={e => setShares(parseInt(e.target.value))} />
         </label>
         <label>
            <input type="radio" name="tradeType" value="Buy" onClick={() => setTradeType(TradeType.Buy)} />
            Buy
         </label>
         <label>
            <input type="radio" name="tradeType" value="Sell" onClick={() => setTradeType(TradeType.Sell)} />
            Sell
         </label>
         <button onClick={trade}>Trade</button>
      </div>
   );
}

export default Trade;