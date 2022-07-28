import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useAppSelector } from "../../hooks/hooks";
import CurrencyTableauItem from "./currencyTableauItem";

const CurrencyTableau = () => {
  const popularCoins = useAppSelector(
    (store) => store.cryptoCoins.popularCoins
  );

  return (
    <div>
      {popularCoins.map((coin) => (
        <CurrencyTableauItem
          key={uuidv4()}
          name={coin.name}
          price={+coin.priceUsd}
          symbol={coin.symbol}
        />
      ))}
    </div>
  );
};

export default CurrencyTableau;
