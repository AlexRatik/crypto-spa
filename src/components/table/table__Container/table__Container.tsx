import React from "react";
import Table__Item from "../table__Item/table__Item";
import "./table__Container.scss";
import AddButton from "../../addButton/addButton";

interface ITable__ContainerProps {
  name: string;
  id: string;
  symbol: string;
  price: number | string;
  rank: string;
  onButtonClick?: () => void;
}

const Table__Container = ({
  name,
  id,
  symbol,
  rank,
  price,
  onButtonClick,
}: ITable__ContainerProps) => {
  return (
    <div className="table__Container">
      <Table__Item
        name={name}
        symbol={symbol}
        price={price}
        rank={rank}
        id={id}
      />
      {typeof price === "number" && (
        <AddButton
          text={"+"}
          clickHandler={onButtonClick || (() => {})}
          className={""}
        />
      )}
    </div>
  );
};

export default Table__Container;
