import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import cryptoCoinsReducer from "../features/cryptoCoins/cryptoCoinsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cryptoCoins: cryptoCoinsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
