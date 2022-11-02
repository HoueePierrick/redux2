// Main file to render the app
import React from "react";

// Importing components
import { AllRecipes } from "../features/allRecipes/AllRecipes";
import { SearchTerm } from "../features/searchTerm/SearchTerm";
// Import the FavoriteRecipes component here.
import { FavoriteRecipes } from "../features/favoriteRecipes/FavoriteRecipes.js";

/* Utility Helpers */
// Function that filters a recipe array based on a search term
function getFilteredRecipes(recipes: any[], searchTerm: any) {
  return recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

export default function App(props: any) {
  // Importing the state and the dispatch functions
  const { state, dispatch } = props;

  // All recipes filtered by search term
  const visibleAllRecipes = getFilteredRecipes(
    state.allRecipes,
    state.searchTerm
  );

  // Favorite recipes filtered by search term
  const visibleFavoriteRecipes = getFilteredRecipes(
    state.favoriteRecipes,
    state.searchTerm
  );

  // Render the <FavoriteRecipes /> component.
  // Pass `dispatch` and `favoriteRecipes` props.
  return (
    <main>
      <section>
        {/* Search bar */}
        <SearchTerm searchTerm={state.searchTerm} dispatch={dispatch} />
      </section>
      <section>
        <h2>Favorite Recipes</h2>
        {/* Section with favorite recipes - filtered by search term*/}
        <FavoriteRecipes
          favoriteRecipes={visibleFavoriteRecipes}
          dispatch={dispatch}
        />
      </section>
      <hr />
      <section>
        <h2>All Recipes</h2>
        {/* Section with all recipes  - filtered by search term*/}
        <AllRecipes allRecipes={visibleAllRecipes} dispatch={dispatch} />
      </section>
    </main>
  );
}
