import React from "react";
import "./portfolioItem.scss";
import Button from "../button/button";
import { useAppDispatch } from "../../hooks/hooks";
import { deleteCoinFromPortfolio } from "../../features/portfolio/portfolioSlice";

interface IPortfolioItemProps {
  name: string;
  totalCount: number;
  cost: number;
  currentCost: number;
}

const PortfolioItem = ({
  name,
  cost,
  totalCount,
  currentCost,
}: IPortfolioItemProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className="portfolio--item">
      <p>{name}</p>
      <p>{cost.toFixed(3)}</p>
      <p>{(currentCost * totalCount).toFixed(3)}</p>
      <p>{totalCount}</p>
      <Button
        text="x"
        clickHandler={() => {
          dispatch(deleteCoinFromPortfolio(name));
        }}
        className="portfolio--button"
      />
    </div>
  );
};

export default PortfolioItem;
