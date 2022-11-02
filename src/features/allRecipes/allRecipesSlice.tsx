// File to set up the allRecipes slice of the state
import allRecipesData from "../../data";

// Action (redux) to fetch data (normally from API)
export const loadData = () => {
  return {
    type: "allRecipes/loadData",
    payload: allRecipesData,
  };
};

const initialState: any[] = [];

// Action handler based on allRecipes === Reducer
// Care: favorite recipes are also managed from here!
export const allRecipesReducer = (allRecipes = initialState, action: any) => {
  switch (action.type) {
    // Fetching data from API
    case "allRecipes/loadData":
      return action.payload;
    // Adding a favorite recipe to list
    case "favoriteRecipes/addRecipe":
      return allRecipes.filter((recipe) => recipe.id !== action.payload.id);
    // Removing a favorite recipe from list
    case "favoriteRecipes/removeRecipe":
      return [...allRecipes, action.payload];
    default:
      return allRecipes;
  }
};

// Reducer exported to store
