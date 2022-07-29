import React from "react";
import "./table__Item.scss";
import { NavLink } from "react-router-dom";

interface ITable__ItemProps {
  name: string;
  symbol: string;
  price: number | string;
  rank: string;
  id: string;
}

const Table__Item = ({ name, symbol, rank, price, id }: ITable__ItemProps) => {
  return (
    <NavLink
      to={`/${id}`}
      className={`table--link ${id ? "" : "table--header"}`}
    >
      <span className="table__Item__Text">{name}</span>
      <span className="table__Item__Text">{symbol}</span>
      <span className="table__Item__Text">{rank}</span>
      <span className="table__Item__Text">
        {typeof price === "number" ? price.toFixed(3) : price}
      </span>
    </NavLink>
  );
};

export default Table__Item;
