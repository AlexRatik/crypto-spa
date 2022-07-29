import React from "react";
import "./overlay.scss";
import { useAppDispatch } from "../../hooks/hooks";
import { hideModal } from "../../features/modalForBuyCoins/modalForBuyCoinsSlice";
import { hidePortfolio } from "../../features/portfolio/portfolioSlice";

const Overlay = () => {
  const dispatch = useAppDispatch();
  const clickHandler = () => {
    dispatch(hideModal());
    dispatch(hidePortfolio());
  };

  return <div className="overlay" onClick={clickHandler} />;
};

export default Overlay;
