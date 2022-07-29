import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import CoinDescription from "../../components/coinDescription/coinDescription";
import { getCryptoCoinHistory } from "../../features/cryptoCoins/cryptoCoinsSlice";
import Chart from "../../components/chart/chart";

const CoinPage = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getCryptoCoinHistory({ id: String(id), interval: "d1" }));
  }, [id]);

  const allCoins = useAppSelector((store) => store.cryptoCoins.coins);
  const historyData = useAppSelector((store) => store.cryptoCoins.coinHistory);
  const historyLength = historyData.length;
  const history = historyData.slice(historyLength - 31);
  const coin = allCoins.find((cryptoCoin) => cryptoCoin.id === id);

  if (!coin) return null;

  return (
    <div>
      <CoinDescription coin={coin} />
      <Chart data={history} />
    </div>
  );
};

export default CoinPage;
