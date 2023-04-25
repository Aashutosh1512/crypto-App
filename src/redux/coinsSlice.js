import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCoins = createAsyncThunk('coins/fetchCoins', async () => {
  const response = await fetch('https://coinranking1.p.rapidapi.com/coins', {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ff57ac75cfmsh9a5dd881333ac19p13f491jsn37413c4c676b',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    },
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      'tiers[0]': '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '100',
      offset: '0'
    }
  });
  const data = await response.json();
  return data;
});

const coinsSlice = createSlice({
  name: 'coins',
  initialState: {
    data: null,
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoins.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCoins.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchCoins.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default coinsSlice.reducer;
