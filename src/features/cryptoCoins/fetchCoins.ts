import axios from "axios";
import { ICoin } from "./ICoin";

const COINCAP_API_URL = "https://api.coincap.io/v2/assets";

const COINCAP_API = axios.create({
  baseURL: COINCAP_API_URL,
});

export const fetchCoins = async (): Promise<ICoin[]> => {
  const response = await COINCAP_API.get("/");
  return response.data.data;
};
