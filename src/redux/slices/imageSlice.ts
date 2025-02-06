import { storage } from "@/firebase";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { ref, listAll, getDownloadURL } from "firebase/storage";

// Define the types for the state
interface ImageState {
  imageList: string[];
  status: "loading" | "loaded" | "error";
}

const initialState: ImageState = {
  imageList: [],
  status: "loading",
};

// Define the async thunk to fetch images
export const fetchImages = createAsyncThunk<
  string[],
  void,
  { rejectValue: string }
>("images/fetchImages", async (_, { getState, rejectWithValue }) => {
  const { imageList } = (getState() as { images: ImageState }).images;
  const imageListRef = ref(storage, "images/");

  console.log("test");
  try {
    const res = await listAll(imageListRef);

    console.log("res" + res);

    const urls = await Promise.all(
      res.items.map(async (item) => {
        try {
          return await getDownloadURL(item);
        } catch (error) {
          console.error(`Failed to fetch URL for ${item.name}: ${error}`);
          return null;
        }
      })
    );

    console.log(urls);

    const validUrls = urls.filter((url): url is string => url !== null);

    const uniqueUrls = Array.from(new Set([...imageList, ...validUrls]));

    return uniqueUrls;
  } catch (error) {
    console.error("Error fetching images:", error);
    return rejectWithValue(
      error instanceof Error ? error.message : "Failed to fetch images"
    );
  }
});

// Create the slice
const imageSlice = createSlice({
  name: "images",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.imageList = [];
        state.status = "loading";
      })
      .addCase(
        fetchImages.fulfilled,
        (state, action: PayloadAction<string[]>) => {
          state.imageList = action.payload;
          state.status = "loaded";
        }
      )
      .addCase(fetchImages.rejected, (state) => {
        state.imageList = [];
        state.status = "error";
      });
  },
});

export const imageReducer = imageSlice.reducer;
