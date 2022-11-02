import { addRecipe } from "../favoriteRecipes/favoriteRecipesSlice";

// Function to load data from API
import { loadData } from "./allRecipesSlice";

import React, { useEffect } from "react";
import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";

// Ignore
const favoriteIconURL =
  "https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/favorite.svg";

export const AllRecipes = (props: any) => {
  // allRecipes imported from an other feature and dispatch to make it work
  const { allRecipes, dispatch } = props;

  // Action to fetch data from API
  const onFirstRender = () => {
    dispatch(loadData());
  };
  // Loading before starting anything
  useEffect(onFirstRender, [dispatch]);

  // Function to add a favorite recipe
  const onAddRecipeHandler = (recipe: any) => {
    dispatch(addRecipe(recipe));
  };

  return (
    <div className="recipes-container">
      {/* Returning all recipes as components : Recipe including Favorite Button */}
      {allRecipes.map((recipe: any) => (
        <Recipe recipe={recipe} key={recipe.id}>
          {/*  Button to add or remove favorite recipes */}
          <FavoriteButton
            onClickHandler={() => onAddRecipeHandler(recipe)}
            icon={favoriteIconURL}
          >
            Add to Favorites
          </FavoriteButton>
        </Recipe>
      ))}
    </div>
  );
};
