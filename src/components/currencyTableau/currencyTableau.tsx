import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useAppSelector } from "../../hooks/hooks";
import CurrencyTableau__Item from "./currencyTableau__Item";
import "./currencyTableau.scss";

const CurrencyTableau = () => {
  const popularCoins = useAppSelector(
    (store) => store.cryptoCoins.popularCoins
  );

  return (
    <div className="currencyTableau">
      {popularCoins.map((coin) => (
        <CurrencyTableau__Item
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
