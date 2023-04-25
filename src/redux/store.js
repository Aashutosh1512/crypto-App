import { configureStore } from '@reduxjs/toolkit';
import coinsReducer from './coinsSlice';
import newsReducer from './newsSlice';
const store = configureStore({
  reducer: {
    coins: coinsReducer,
    //change 
    news:newsReducer,


  }
});

export default store;
