import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  greeting: {},
  isLoading: false,
  error: undefined,
};

export const getGreeting = createAsyncThunk(
  "greeting/fetchGreeting",
  async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/v1/greetings"
      );
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

const greetingSlice = createSlice({
  name: "greeting",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGreeting.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getGreeting.fulfilled, (state, action) => {
      state.isLoading = false;
      state.greeting = action.payload;
    });
    builder.addCase(getGreeting.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default greetingSlice.reducer;
