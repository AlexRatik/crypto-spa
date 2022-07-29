import React, { useEffect } from "react";
import "./App.scss";
import Header from "./components/header/header";
import { getCryptoCoins } from "./features/cryptoCoins/cryptoCoinsSlice";
import { useAppDispatch } from "./hooks/hooks";
import { getPortfolioCoins } from "./features/portfolio/portfolioSlice";
import Router from "./router/router";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCryptoCoins());
    dispatch(getPortfolioCoins());
  }, []);

  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
}

export default App;
