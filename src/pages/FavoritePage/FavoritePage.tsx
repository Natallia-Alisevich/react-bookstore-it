import React from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "routes";

export const FavoritePage = () => {
  return (
    <div>
      <h2>  FavoritePage</h2>
      <Link to={ROUTE.HOME}>to home</Link>
    </div>
  );
};
