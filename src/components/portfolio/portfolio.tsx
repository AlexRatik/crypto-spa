import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./portfolio.scss";
import { useAppSelector } from "../../hooks/hooks";
import PortfolioItem from "../portfolioItem/portfolioItem";

const Portfolio = () => {
  const allCryptoCoins = useAppSelector((store) => store.cryptoCoins.coins);
  const portfolioCoins = useAppSelector(
    (store) => store.portfolioReducer.cryptoCoinsInPortfolio
  );
  const getCurrentCost = (name: string) => {
    if (allCryptoCoins) {
      const coin = allCryptoCoins.find(
        (currentCoin) => currentCoin.name === name
      );
      if (coin) return +coin.priceUsd;
    }
    return 0;
  };
  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <div className="portfolio--description">
        <p>Name</p>
        <p>Initial cost</p>
        <p>Current cost</p>
        <p>Total</p>
        <p></p>
      </div>
      <div className="portfolio--container">
        {portfolioCoins.map((coin) => (
          <PortfolioItem
            key={uuidv4()}
            name={coin.name}
            totalCount={coin.totalCount}
            cost={coin.cost}
            currentCost={getCurrentCost(coin.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
