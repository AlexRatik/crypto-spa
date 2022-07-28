import React from "react";
import "./currencyTableau__Item.scss";

interface ICurrencyTableauItemProps {
  price: number;
  name: string;
  symbol: string;
}

const CurrencyTableau__Item = ({
  price,
  name,
  symbol,
}: ICurrencyTableauItemProps) => {
  return (
    <div className="currencyTableau__Item">
      <span>
        {name}({symbol}) : {price.toFixed(2)}$
      </span>
    </div>
  );
};

export default CurrencyTableau__Item;
