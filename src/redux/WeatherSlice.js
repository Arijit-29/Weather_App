import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = " https://api.weatherapi.com/v1";
export const fetchForecastBycity = createAsyncThunk(
  "weather/fetchForecastBycity",
  async (city) => {
    const res = await axios.get(
      `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=5`
    );
    return res.data;
  }
);
const WeatherSlice = createSlice({
  name: "weather",
  initialState: {
    forecast: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchForecastBycity.fulfilled, (state, action) => {
      state.forecast = action.payload;
    });
  },
});
export default WeatherSlice.reducer;
