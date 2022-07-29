import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  totalCount: number;
  siblingCount: number;
  currentPage: number;
  limit: number;
}

const initialState: IInitialState = {
  totalCount: 100,
  siblingCount: 1,
  currentPage: 1,
  limit: 10,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setTotalCount: (state, action: PayloadAction<number>) => {
      state.totalCount = action.payload;
    },
    nextPage: (state) => {
      state.currentPage += 1;
    },
    prevPage: (state) => {
      state.currentPage -= 1;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setTotalCount, nextPage, prevPage, setCurrentPage } =
  paginationSlice.actions;

export default paginationSlice.reducer;
