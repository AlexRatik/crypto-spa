import React from "react";
import "./table__Item.scss";

interface ITable__ItemProps {
  name: string;
  symbol: string;
  price: number | string;
  rank: string;
}

const Table__Item = ({ name, symbol, rank, price }: ITable__ItemProps) => {
  return (
    <div className="table__Item">
      <span className="table__Item__Text">{name}</span>
      <span className="table__Item__Text">{symbol}</span>
      <span className="table__Item__Text">{rank}</span>
      <span className="table__Item__Text">
        {typeof price === "number" ? price.toFixed(3) : price}
      </span>
    </div>
  );
};

export default Table__Item;
