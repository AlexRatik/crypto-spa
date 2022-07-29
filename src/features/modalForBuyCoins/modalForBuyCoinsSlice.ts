import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  showModal: boolean;
  coin: { name: string; price: number } | null;
}

const initialState: IInitialState = {
  showModal: false,
  coin: null,
};

export const modalForBuyCoinsSlice = createSlice({
  name: "modalForBuyCoins",
  initialState,
  reducers: {
    setShowModal: (
      state,
      action: PayloadAction<{ name: string; price: number }>
    ) => {
      state.showModal = true;
      state.coin = action.payload;
    },
    hideModal: (state) => {
      state.showModal = false;
      state.coin = null;
    },
  },
});

export const { setShowModal, hideModal } = modalForBuyCoinsSlice.actions;
export default modalForBuyCoinsSlice.reducer;
