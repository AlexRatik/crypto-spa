import React from "react";
import CurrencyTableau from "../currencyTableau/currencyTableau";
import "./header.scss";
import Button from "../button/button";
import PortfolioValue from "../portfolioValue/portfolioValue";

const Header = () => {
  return (
    <div className="header">
      <CurrencyTableau />
      <PortfolioValue />
      <Button text={"Portfolio"} clickHandler={() => {}} className={""} />
    </div>
  );
};

export default Header;
