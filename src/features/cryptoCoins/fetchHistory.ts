import { COINCAP_API } from "./fetchCoins";
import { IHistory } from "./IHistory";

export const fetchHistory = async (
  id: string,
  interval: string = "d1"
): Promise<IHistory[]> => {
  const response = await COINCAP_API.get(`/${id}/history?interval=${interval}`);
  return response.data.data;
};
