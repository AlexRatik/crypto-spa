import { ICoin } from "./ICoin";

export const getPopularCoins = (data: ICoin[]): ICoin[] => {
  const allRanks: number[] = data.map((coin) => +coin.rank);
  const dataCopy: ICoin[] = [...data];
  let result: ICoin[] = [];
  while (result.length < 3) {
    const minRank = Math.min(...allRanks);
    const index = allRanks.indexOf(minRank);
    const item = dataCopy.find((coin) => +coin.rank === minRank);
    if (item) result.push(item);
    allRanks.splice(index, 1);
    dataCopy.splice(index, 1);
  }
  return result;
};
