import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
  const response = await fetch('https://crypto-news16.p.rapidapi.com/news/top/20', {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ff57ac75cfmsh9a5dd881333ac19p13f491jsn37413c4c676b',
        'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
    },
    
  });
  const data = await response.json();
  return data;
});

const newsSlice = createSlice({ 
  name: 'news',
  initialState: {
    data: null,
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default newsSlice.reducer;
