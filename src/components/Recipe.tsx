// Component for recipe (same for general and favorite)
import React from "react";

interface props {
  recipe: any;
  children: any;
}

export default function Recipe({ recipe, children }: props) {
  return (
    <div key={recipe.id} className="recipe" tabIndex={0}>
      <span className="recipe-container">
        <h3 className="recipe-name">{recipe.name}</h3>
        <div className="image-container">
          <img src={recipe.img} alt="" className="recipe-image" />
        </div>
      </span>
      {children}
    </div>
  );
}
