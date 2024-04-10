import './Portfolio.css'
import { useEffect, useState } from 'react';
import { Holding } from 'stock-market-sim-shared';
import { PortfolioPresenter, PortfolioView } from '../../presenter/PortfolioPresenter';
import useToastListener from '../toaster/ToastListenerHook';
import useUserInfo from '../userInfo/UserInfoHook';

const Portfolio = () => {
   const { displayErrorMessage } = useToastListener();
   const [currValue, setCurrValue] = useState(0);
   const [holdings, setHoldings] = useState<Holding[]>([]);
   const [cashValue, setCashValue] = useState(0);
   const [marketValue, setMarketValue] = useState(0);
   const [dayChange, setDayChange] = useState(0);

   const { authToken } = useUserInfo();

   useEffect(() => {
      getPortfolio();
      // fetch the user's portfolio data
      // set the current value of the portfolio
      // set the holdings of the portfolio
   }, []);

   const listener: PortfolioView = {
      displayErrorMessage: displayErrorMessage,
      setHoldings: setHoldings,
      setCurrValue: setCurrValue,
      setMarketValue: setMarketValue,
      setCashValue: setCashValue,
      setDayChange: setDayChange
   }

   const [presenter] = useState(() => new PortfolioPresenter(listener));

   const getPortfolio = async () => {
      presenter.getPortfolio(authToken!);
   }

   return (
      <div>
         <h1>Portfolio</h1>
         <p>Current Value: {currValue.toFixed(2)}</p>
         <p>Cash Value: {cashValue.toFixed(2)}</p>
         <p>Market Value: {marketValue.toFixed(2)}</p>
         <p>Day Change: {dayChange.toFixed(2)}</p>
         <table>
            <thead>
               <tr>
                  <th>Symbol</th>
                  <th>Shares</th>
                  <th>Current Price</th>
                  <th>Cost Basis</th>
                  <th>Market Value</th>
                  <th>Day Change</th>
               </tr>
            </thead>
            <tbody>
               {holdings.map((holding, index) => {
                  return (
                     <tr key={index}>
                        <td>{holding.symbol}</td>
                        <td>{holding.shares}</td>
                        <td>{holding.quote.currentPrice.toFixed(2)}</td>
                        <td>{(holding.shares * holding.costBasis).toFixed(2)}</td>
                        <td>{(holding.shares * holding.quote.currentPrice).toFixed(2)}</td>
                        <td>{(holding.shares * holding.quote.change).toFixed(2)}</td>
                     </tr>
                  );
               })}
            </tbody>
         </table>
      </div>
   );
};

export default Portfolio;