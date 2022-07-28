import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useAppSelector } from "../../hooks/hooks";
import Table__Item from "./table__Item/table__Item";
import { TableColumnsEnum } from "./tableColumnsEnum";
import "./table.scss";

const Table = () => {
  const cryptoCoins = useAppSelector((store) => store.cryptoCoins.coins);
  return (
    <div className="table">
      <Table__Item
        name={TableColumnsEnum.NAME}
        price={TableColumnsEnum.PRICE_USD}
        symbol={TableColumnsEnum.SYMBOL}
        rank={TableColumnsEnum.RANK}
        key={uuidv4()}
      />
      {cryptoCoins.map((coin) => (
        <Table__Item
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
