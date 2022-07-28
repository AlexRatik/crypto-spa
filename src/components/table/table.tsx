import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useAppSelector } from "../../hooks/hooks";
import { TableColumnsEnum } from "./tableColumnsEnum";
import "./table.scss";
import Table__Container from "./table__Container/table__Container";

const Table = () => {
  const cryptoCoins = useAppSelector((store) => store.cryptoCoins.coins);
  return (
    <div className="table">
      <Table__Container
        name={TableColumnsEnum.NAME}
        price={TableColumnsEnum.PRICE_USD}
        symbol={TableColumnsEnum.SYMBOL}
        rank={TableColumnsEnum.RANK}
        key={uuidv4()}
      />
      {cryptoCoins.map((coin) => (
        <Table__Container
          key={uuidv4()}
          name={coin.name}
          price={+coin.priceUsd}
          symbol={coin.symbol}
          rank={coin.rank}
        />
      ))}
    </div>
  );
};

export default Table;
