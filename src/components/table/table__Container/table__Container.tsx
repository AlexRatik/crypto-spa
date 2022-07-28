import React from "react";
import Button from "../../button/button";
import Table__Item from "../table__Item/table__Item";
import "./table__Container.scss";

interface ITable__ContainerProps {
  name: string;
  symbol: string;
  price: number | string;
  rank: string;
}

const Table__Container = ({
  name,
  symbol,
  rank,
  price,
}: ITable__ContainerProps) => {
  return (
    <div className="table__Container">
      <Table__Item name={name} symbol={symbol} price={price} rank={rank} />
      {typeof price === "number" && (
        <Button text={"+"} clickHandler={() => {}} />
      )}
    </div>
  );
};

export default Table__Container;
