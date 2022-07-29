import React, { FormEvent, useState } from "react";
import Button from "../button/button";
import "./modalForBuyCoins.scss";
import ErrorMessage from "../errorMessage/errorMessage";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { addCoinsToPortfolio } from "../../features/portfolio/portfolioSlice";
import { hideModal } from "../../features/modalForBuyCoins/modalForBuyCoinsSlice";

const ModalForBuyCoins = () => {
  const dispatch = useAppDispatch();
  const coin = useAppSelector((store) => store.modalForBuyCoins.coin);
  const [isShowErrorMsg, setIsShowErrorMsg] = useState<boolean>(false);
  const [cost, setCost] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);

  if (!coin) return null;

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = { name: coin.name, totalCount: amount, cost };
    dispatch(addCoinsToPortfolio(data));
    dispatch(hideModal());
  };

  const inputHandler = (value: string) => {
    const num = +value;
    if (isNaN(+num)) {
      setIsShowErrorMsg(true);
    } else {
      setIsShowErrorMsg(false);
      calculateCost(num);
      setAmount(+value);
    }
  };

  const calculateCost = (value: number): void => {
    setCost(value * coin.price);
  };

  return (
    <>
      <div className="modalForBuyCoins">
        <form
          className="modalForBuyCoins__container"
          onSubmit={(e) => submitHandler(e)}
        >
          <h3 className="modalForBuyCoins--item">{coin.name}</h3>
          <div className="modalForBuyCoins--item modalForBuyCoins--item-container">
            <input
              placeholder="Enter the amount of currency"
              onChange={(e) => inputHandler(e.target.value)}
              className="modalForBuyCoins__input"
              type="text"
            />
            {isShowErrorMsg && (
              <ErrorMessage text={"Enter only integers or fractions"} />
            )}
          </div>
          <div>
            <p className="modalForBuyCoins--item">
              Price: {coin.price.toFixed(5)}$
            </p>
            <p className="modalForBuyCoins--item">Cost: {cost.toFixed(5)}$</p>
          </div>
          <Button
            className={"modalForBuyCoins--button modalForBuyCoins--item"}
            text={"Buy!"}
            clickHandler={() => {}}
            disabled={isShowErrorMsg || !amount}
          />
        </form>
      </div>
    </>
  );
};

export default ModalForBuyCoins;
