import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTE } from "routes";

export const RequareAuth = () => {
  const isAuth = false;
  return isAuth ? <Outlet /> : <Navigate to={ROUTE.HOME} />;
};


