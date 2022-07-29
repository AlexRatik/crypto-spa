import React, { useEffect } from "react";
import "./App.scss";
import Header from "./components/header/header";
import { getCryptoCoins } from "./features/cryptoCoins/cryptoCoinsSlice";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import Table from "./components/table/table";
import Pagination from "./components/pagination/pagination";
import Overlay from "./components/overlay/overlay";
import { getPortfolioCoins } from "./features/portfolio/portfolioSlice";
import Portfolio from "./components/portfolio/portfolio";

function App() {
  const dispatch = useAppDispatch();
  const showOverlay = useAppSelector(
    (store) => store.modalForBuyCoins.showModal
  );
  const showPortfolio = useAppSelector(
    (store) => store.portfolioReducer.isShowPortfolio
  );
  useEffect(() => {
    dispatch(getCryptoCoins());
    dispatch(getPortfolioCoins());
  }, []);

  return (
    <div className="App">
      <Header />
      <Table />
      <Pagination />
      {showPortfolio && <Portfolio />}
      {(showOverlay || showPortfolio) && <Overlay />}
    </div>
  );
}

export default App;
