import React from "react";
import "./portfoliaValue.scss";
import { usePortfolio } from "../../hooks/usePortfolio";

const PortfolioValue = () => {
  const [total, init, diff] = usePortfolio();
  const percentages = (diff / init) * 100;
  return (
    <div className="portfolioValue">
      {total.toFixed(2)} USD{" "}
      {diff > 0 ? `+${diff.toFixed(2)}` : diff.toFixed(2)} (
      {isNaN(percentages) ? 0 : percentages.toFixed(2)} %)
    </div>
  );
};

export default PortfolioValue;
