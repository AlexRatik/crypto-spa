import React from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
import CoinDescription from "../../components/coinDescription/coinDescription";

const CoinPage = () => {
  const { id } = useParams();

  const allCoins = useAppSelector((store) => store.cryptoCoins.coins);

  const coin = allCoins.find((cryptoCoin) => cryptoCoin.id === id);

  if (!coin) return null;

  return (
    <div>
      <CoinDescription coin={coin} />
    </div>
  );
};

export default CoinPage;
