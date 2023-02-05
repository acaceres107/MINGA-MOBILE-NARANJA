import { configureStore } from "@reduxjs/toolkit"
import categoriesReducer from './categories/categories.reducer';
import reducer from "./Comics../comics_Reducer";

export const store = configureStore({

  reducer: {

    categories:categoriesReducer,
    comics : reducer
  }
  
})
