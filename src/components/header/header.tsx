import React from "react";
import CurrencyTableau from "../currencyTableau/currencyTableau";
import "./header.scss";
import Button from "../button/button";
import PortfolioValue from "../portfolioValue/portfolioValue";
import { useAppDispatch } from "../../hooks/hooks";
import { showPortfolio } from "../../features/portfolio/portfolioSlice";

const Header = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="header">
      <CurrencyTableau />
      <PortfolioValue />
      <Button
        text={"Portfolio"}
        clickHandler={() => {
          dispatch(showPortfolio());
        }}
        className={""}
      />
    </div>
  );
};

export default Header;
