import { useAppSelector } from "./hooks";
import { useMemo } from "react";

export const usePortfolio = () => {
  const allCoins = useAppSelector((store) => store.cryptoCoins.coins);
  const coinsInPortfolio = useAppSelector(
    (store) => store.portfolioReducer.cryptoCoinsInPortfolio
  );

  const portfolioValues = useMemo(() => {
    const names = coinsInPortfolio.map((coin) => coin.name);
    const actualCoins = allCoins.filter((coin) => names.includes(coin.name));
    const totalCosts = actualCoins.map((coin) => {
      return (
        coinsInPortfolio[names.indexOf(coin.name)].totalCount * +coin.priceUsd
      );
    });
    const totalCost = totalCosts.reduce((prev, acc) => prev + acc, 0);
    const initialCost = coinsInPortfolio.reduce(
      (init, acc) => init + acc.cost,
      0
    );
    const diff = totalCost - initialCost;
    return [totalCost, initialCost, diff];
  }, [coinsInPortfolio, allCoins]);

  return portfolioValues;
};
