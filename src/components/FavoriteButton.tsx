// Button to add recipe as favorite
import React from "react";

interface props {
  children: any;
  onClickHandler: any;
  icon: any;
}

export default function FavoriteButton({
  children,
  onClickHandler,
  icon,
}: props) {
  return (
    <button className="favorite-button" onClick={onClickHandler}>
      <img className="heart-icon" alt="" src={icon} />
      {children}
    </button>
  );
}
