import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICoin } from "./ICoin";
import { fetchCoins } from "./fetchCoins";
import { getPopularCoins } from "./getPopularCoins";
import { setTotalCount } from "../pagination/paginationSlice";
import { fetchHistory } from "./fetchHistory";
import { IHistory } from "./IHistory";

interface IInitialState {
  coins: ICoin[];
  popularCoins: ICoin[];
  coinHistory: IHistory[];
}

const initialState: IInitialState = {
  coins: [],
  popularCoins: [],
  coinHistory: [],
};

export const getCryptoCoins = createAsyncThunk(
  "cryptoCoins/getCoins",
  async (_, { dispatch }) => {
    const data = await fetchCoins();
    dispatch(setCryptoCoins(data));
    dispatch(setPopularCryptoCoins(data));
    dispatch(setTotalCount(data.length));
  }
);

export const getCryptoCoinHistory = createAsyncThunk(
  "cryptoCoins/getCoinHistory",
  async ({ id, interval }: { id: string; interval: string }, { dispatch }) => {
    const data = await fetchHistory(id, interval);
    dispatch(setCoinHistory(data));
  }
);

export const cryptoCoinsSlice = createSlice({
  name: "cryptoCoins",
  initialState,
  reducers: {
    setCryptoCoins: (state, action: PayloadAction<ICoin[]>) => {
      state.coins = action.payload;
    },
    setPopularCryptoCoins: (state, action: PayloadAction<ICoin[]>) => {
      state.popularCoins = getPopularCoins(action.payload);
    },
    setCoinHistory: (state, action: PayloadAction<IHistory[]>) => {
      state.coinHistory = action.payload;
    },
  },
});

export const { setCryptoCoins, setPopularCryptoCoins, setCoinHistory } =
  cryptoCoinsSlice.actions;
export default cryptoCoinsSlice.reducer;
