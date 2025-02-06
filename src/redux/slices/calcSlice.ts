import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

// Define types for the data structure that will be returned by Firestore
interface SizeInfo {
  size: string;
  price: number;
  quantity: number;
}

interface CalculatorState {
  terminIndividual: string[];
  sizesIndividual: SizeInfo[];
  status: "loading" | "loaded" | "error";
}

// Define the async thunks for fetching the termin and sizes information
export const fetchTerminAndPrice = createAsyncThunk<string[]>(
  "calculator/fetchTerminAndPrice",
  async () => {
    const collectionRef = collection(db, "calculator_individual");
    const data = await getDocs(collectionRef);

    // Assume the termin is an array of strings
    const termin: string[] = data.docs[0].data().termin;
    return termin;
  }
);

export const fetchSizesAndPrice = createAsyncThunk<{
  sizes: string[];
  sizesPrice: number[];
  sizesQuantity: number[];
}>("calculator/fetchSizesAndPrice", async () => {
  const collectionRef = collection(db, "calculator_individual");
  const data = await getDocs(collectionRef);

  const sizes = data.docs[0].data().sizes;
  const sizesPrice = data.docs[0].data().sizes_price;
  const sizesQuantity = data.docs[0].data().sizes_quantity;

  return { sizes, sizesPrice, sizesQuantity };
});

// Define the initial state
const initialState: CalculatorState = {
  terminIndividual: [],
  sizesIndividual: [],
  status: "loading",
};

// Create the slice with proper types for each action
export const calcSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Termin fetching cases
      .addCase(fetchTerminAndPrice.pending, (state) => {
        state.terminIndividual = [];
        state.status = "loading";
      })
      .addCase(
        fetchTerminAndPrice.fulfilled,
        (state, action: PayloadAction<string[]>) => {
          state.terminIndividual = action.payload;
          state.status = "loaded";
        }
      )
      .addCase(fetchTerminAndPrice.rejected, (state) => {
        state.terminIndividual = [];
        state.status = "error"; // Change to "error" when rejected
      })

      // Sizes and price fetching cases
      .addCase(fetchSizesAndPrice.pending, (state) => {
        state.sizesIndividual = [];
        state.status = "loading";
      })
      .addCase(
        fetchSizesAndPrice.fulfilled,
        (
          state,
          action: PayloadAction<{
            sizes: string[];
            sizesPrice: number[];
            sizesQuantity: number[];
          }>
        ) => {
          const { sizes, sizesPrice, sizesQuantity } = action.payload;

          // Map the sizes with price and quantity
          state.sizesIndividual = sizes.map((size, index) => ({
            size,
            price: sizesPrice[index],
            quantity: sizesQuantity[index],
          }));
          state.status = "loaded";
        }
      )
      .addCase(fetchSizesAndPrice.rejected, (state) => {
        state.sizesIndividual = [];
        state.status = "error"; // Change to "error" when rejected
      });
  },
});

export const calcReducer = calcSlice.reducer;
