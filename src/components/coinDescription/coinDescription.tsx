import React from "react";
import { ICoin } from "../../features/cryptoCoins/ICoin";

interface ICoinDescriptionProps {
  coin: ICoin;
}

const CoinDescription = ({ coin }: ICoinDescriptionProps) => {
  const {
    name,
    rank,
    changePercent24Hr,
    marketCapUsd,
    priceUsd,
    supply,
    maxSupply,
    volumeUsd24Hr,
    vwap24Hr,
    symbol,
    explorer,
  } = coin;

  const fixNumber = (val: string): string => {
    let num = +val;
    return num.toFixed(3);
  };

  return (
    <div>
      <h1>Description</h1>
      <p>Name: {name}</p>
      <p>Rank: {rank}</p>
      <p>Percent(24Hr): {fixNumber(changePercent24Hr)}</p>
      <p>Market cap: {fixNumber(marketCapUsd)}</p>
      <p>Price(USD): {fixNumber(priceUsd)}$</p>
      <p>Supply: {fixNumber(supply)}</p>
      <p>Max supply: {maxSupply ? fixNumber(maxSupply) : "Undefined"}</p>
      <p>24-hour Volume: {fixNumber(volumeUsd24Hr)}</p>
      <p>VWAP(24Hr): {fixNumber(vwap24Hr)}</p>
      <p>Symbol: {symbol}</p>
      <p>
        Explorer: <a href={explorer}>{explorer}</a>
      </p>
    </div>
  );
};

export default CoinDescription;
