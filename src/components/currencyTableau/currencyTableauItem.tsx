import React from "react";

interface ICurrencyTableauItemProps {
  price: number;
  name: string;
  symbol: string;
}

const CurrencyTableauItem = ({
  price,
  name,
  symbol,
}: ICurrencyTableauItemProps) => {
  return (
    <div>
      <span>
        {name}({symbol}) : {price.toFixed(2)}$
      </span>
    </div>
  );
};

export default CurrencyTableauItem;
