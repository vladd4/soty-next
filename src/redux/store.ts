import { configureStore } from "@reduxjs/toolkit";

import { imageReducer } from "./slices/imageSlice";
import { calcReducer } from "./slices/calcSlice";
import { modalReducer } from "./slices/modalSlice";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    images: imageReducer,
    calculator: calcReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
