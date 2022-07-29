import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const KEY_FOR_LOCALSTORAGE = "cryptoCoinsPortfolio";

interface ICoinInPortfolio {
  name: string;
  totalCount: number;
  cost: number;
}

interface IInitialState {
  cryptoCoinsPortfolio: ICoinInPortfolio[];
}

const initialState: IInitialState = {
  cryptoCoinsPortfolio: [],
};

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    getPortfolioCoins: (state) => {
      const value = localStorage.getItem(KEY_FOR_LOCALSTORAGE);
      if (value) {
        state.cryptoCoinsPortfolio = JSON.parse(value);
      }
    },
    addCoinsToPortfolio: (state, action: PayloadAction<ICoinInPortfolio>) => {
      const names = state.cryptoCoinsPortfolio.map((coin) => coin.name);
      if (names.includes(action.payload.name)) {
        state.cryptoCoinsPortfolio = state.cryptoCoinsPortfolio.map(
          (coinInfo) => {
            if (coinInfo.name === action.payload.name) {
              coinInfo.totalCount += action.payload.totalCount;
              coinInfo.cost += action.payload.cost;
            }
            return coinInfo;
          }
        );
      } else {
        state.cryptoCoinsPortfolio.push(action.payload);
      }
      console.log(state.cryptoCoinsPortfolio);
      localStorage.setItem(
        KEY_FOR_LOCALSTORAGE,
        JSON.stringify(state.cryptoCoinsPortfolio)
      );
    },
  },
});

export const { addCoinsToPortfolio, getPortfolioCoins } =
  portfolioSlice.actions;
export default portfolioSlice.reducer;
