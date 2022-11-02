// File stocking the main state (with all its slices)
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

// Each slice import
import { favoriteRecipesReducer } from "../features/favoriteRecipes/favoriteRecipesSlice";
import { searchTermReducer } from "../features/searchTerm/searchTermSlice";
import { allRecipesReducer } from "../features/allRecipes/allRecipesSlice";

export const store = configureStore(
  // Needs function combineReducers to work
  combineReducers({
    favoriteRecipes: favoriteRecipesReducer,
    searchTerm: searchTermReducer,
    allRecipes: allRecipesReducer,
  }) as any
);
