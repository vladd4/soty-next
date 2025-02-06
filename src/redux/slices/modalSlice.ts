import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  size: null,
  termin: null,
  price: null,
  showModal: false,
  isVisit: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setShowModal: (state, action) => {
      state.showModal = action.payload;
    },
    setIsVisit: (state, action) => {
      state.isVisit = action.payload;
    },
    setSize: (state, action) => {
      state.size = action.payload;
    },
    setTermin: (state, action) => {
      state.termin = action.payload;
    },

    setPrice: (state, action) => {
      state.price = action.payload;
    },
    resetData: (state) => {
      state.size = initialState.size;
      state.termin = initialState.termin;
      state.price = initialState.price;
    },
  },
});

export const {
  setSize,
  setTermin,
  resetData,
  setPrice,
  setShowModal,
  setIsVisit,
} = modalSlice.actions;

export const modalReducer = modalSlice.reducer;
