import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { ROUTE } from "./routes";
import {
  AccountPage, CartPage, DetailsPage, FavoritePage, HomePage, ResetPasswordPage,
  SearchPage, SignInPage, SignUpPage
} from "pages";

import { MainTemplate } from "templates";
import { RequareAuth } from "components";

export const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<MainTemplate />}>
    <Route index element={<HomePage />} />
    <Route path={ROUTE.SEARCH} element={<SearchPage />} />
    <Route path={ROUTE.RESETPASSWORD} element={<ResetPasswordPage />} />
    <Route path={ROUTE.SIGNUP} element={<SignUpPage />} />
    <Route path={ROUTE.SIGNIN} element={<SignInPage />} />
    <Route path={ROUTE.DETAILS} element={<DetailsPage />} />
    <Route path={ROUTE.REQUAREAUTH} element={<RequareAuth />} />
    <Route path={ROUTE.FAVORITE} element={<FavoritePage />} />
    <Route path={ROUTE.CART} element={<CartPage />} />
    <Route path={ROUTE.ACCOUNT} element={<AccountPage />} />
  </Route>
),
  { basename: "/react-bookstore-it" },
);

