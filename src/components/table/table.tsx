import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { TableColumnsEnum } from "./tableColumnsEnum";
import "./table.scss";
import Table__Container from "./table__Container/table__Container";
import { ICoin } from "../../features/cryptoCoins/ICoin";
import ModalForBuyCoins from "../modalForByuCoins/modalForBuyCoins";
import { setShowModal } from "../../features/modalForBuyCoins/modalForBuyCoinsSlice";

const Table = () => {
  const dispatch = useAppDispatch();

  const showModal = useAppSelector((store) => store.modalForBuyCoins.showModal);

  const cryptoCoins = useAppSelector((store) => store.cryptoCoins.coins);

  const { currentPage, limit } = useAppSelector((store) => store.pagination);

  const [visibleCryptoCoins, setVisibleCoins] = useState<ICoin[]>(
    cryptoCoins.slice((currentPage - 1) * limit, currentPage * limit)
  );

  useEffect(() => {
    setVisibleCoins(
      cryptoCoins.slice((currentPage - 1) * limit, currentPage * limit)
    );
  }, [currentPage, cryptoCoins]);

  const buyCurrency = (name: string, price: number) => {
    dispatch(setShowModal({ name, price }));
  };

  return (
    <div className="table">
      <Table__Container
        name={TableColumnsEnum.NAME}
        price={TableColumnsEnum.PRICE_USD}
        symbol={TableColumnsEnum.SYMBOL}
        rank={TableColumnsEnum.RANK}
        key={uuidv4()}
      />
      {visibleCryptoCoins.map((coin) => (
        <Table__Container
          key={uuidv4()}
          name={coin.name}
          price={+coin.priceUsd}
          symbol={coin.symbol}
          rank={coin.rank}
          onButtonClick={() => buyCurrency(coin.name, +coin.priceUsd)}
        />
      ))}
      {showModal && <ModalForBuyCoins />}
    </div>
  );
};

export default Table;
