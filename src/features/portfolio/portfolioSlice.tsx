import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const KEY_FOR_LOCALSTORAGE = "cryptoCoinsInPortfolio";

interface ICoinInPortfolio {
  name: string;
  totalCount: number;
  cost: number;
}

interface IInitialState {
  cryptoCoinsInPortfolio: ICoinInPortfolio[];
  isShowPortfolio: boolean;
}

const initialState: IInitialState = {
  cryptoCoinsInPortfolio: [],
  isShowPortfolio: false,
};

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    getPortfolioCoins: (state) => {
      const value = localStorage.getItem(KEY_FOR_LOCALSTORAGE);
      if (value) {
        state.cryptoCoinsInPortfolio = JSON.parse(value);
      }
    },
    addCoinsToPortfolio: (state, action: PayloadAction<ICoinInPortfolio>) => {
      const names = state.cryptoCoinsInPortfolio.map((coin) => coin.name);
      if (names.includes(action.payload.name)) {
        state.cryptoCoinsInPortfolio = state.cryptoCoinsInPortfolio.map(
          (coinInfo) => {
            if (coinInfo.name === action.payload.name) {
              coinInfo.totalCount += action.payload.totalCount;
              coinInfo.cost += action.payload.cost;
            }
            return coinInfo;
          }
        );
      } else {
        state.cryptoCoinsInPortfolio.push(action.payload);
      }
      localStorage.setItem(
        KEY_FOR_LOCALSTORAGE,
        JSON.stringify(state.cryptoCoinsInPortfolio)
      );
    },
    showPortfolio: (state) => {
      state.isShowPortfolio = true;
    },
    hidePortfolio: (state) => {
      state.isShowPortfolio = false;
    },
    deleteCoinFromPortfolio: (state, action: PayloadAction<string>) => {
      state.cryptoCoinsInPortfolio = state.cryptoCoinsInPortfolio.filter(
        (coin) => coin.name !== action.payload
      );
    },
  },
});

export const {
  addCoinsToPortfolio,
  getPortfolioCoins,
  showPortfolio,
  hidePortfolio,
  deleteCoinFromPortfolio,
} = portfolioSlice.actions;
export default portfolioSlice.reducer;
