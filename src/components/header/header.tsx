import React from "react";
import CurrencyTableau from "../currencyTableau/currencyTableau";
import "./header.scss";
import Button from "../button/button";

const Header = () => {
  return (
    <div className="header">
      <CurrencyTableau />
      <Button text={"Portfolio"} clickHandler={() => {}} />
    </div>
  );
};

export default Header;
