import React from "react";
import "./overlay.scss";
import { useAppDispatch } from "../../hooks/hooks";
import { hideModal } from "../../features/modalForBuyCoins/modalForBuyCoinsSlice";

const Overlay = () => {
  const dispatch = useAppDispatch();
  const clickHandler = () => {
    dispatch(hideModal());
  };

  return <div className="overlay" onClick={clickHandler}></div>;
};

export default Overlay;
