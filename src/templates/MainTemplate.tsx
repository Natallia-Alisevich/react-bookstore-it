import { Footer, Header } from "components"
import React from "react";
import { Outlet } from "react-router-dom";
import { MainContainer } from "./styles";

export const MainTemplate = () => {
  return (
    <MainContainer>
      <Header />
      <Outlet />
      <Footer />
    </MainContainer>
  );
};
