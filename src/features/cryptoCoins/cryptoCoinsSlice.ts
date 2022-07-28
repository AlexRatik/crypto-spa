import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICoin } from "./ICoin";
import { fetchCoins } from "./fetchCoins";
import { getPopularCoins } from "./getPopularCoins";
import { setTotalCount } from "../pagination/paginationSlice";

interface IInitialState {
  coins: ICoin[];
  popularCoins: ICoin[];
}

const initialState: IInitialState = {
  coins: [],
  popularCoins: [],
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

export const cryptoCoinsSlice = createSlice({
  name: "cryptoCoins",
  initialState,
  reducers: {
    setCryptoCoins: (state, action: PayloadAction<ICoin[]>) => {
      state.coins = action.payload;
    },
    setPopularCryptoCoins: (state, action) => {
      state.popularCoins = getPopularCoins(action.payload);
    },
  },
});

export const { setCryptoCoins, setPopularCryptoCoins } =
  cryptoCoinsSlice.actions;
export default cryptoCoinsSlice.reducer;
