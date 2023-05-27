import { BookList, FormSubscribe, Spinner } from "components";
import { BookItem } from "components/BookItem/BookItem";
import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { ROUTE } from "routes";
import {
  fetchSearchBooks
} from "store";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { selectSearch } from "store/selectors/searchSelector";
import { SearchInfo } from "types";


export const SearchPage = () => {
  const { isLoading, books, error } = useAppSelector(selectSearch);
  const { title } = useParams();
  const [searchParams] = useSearchParams();

  //const title = searchParams.get("title");
  interface SearchState extends SearchInfo {
    isLoading: boolean;
  }

  const [search, setSearchBooks] = useState<SearchState>();

  const dispatch = useAppDispatch();
  useEffect(() => {
    fetch("`https://api.itbook.store/1.0/search/${search}`")
      .then((response) => response.json())
      .then((response) => { console.log(response.search); });
    // .then((response) => setSearchBooks(response));
  }, [title]);


  useEffect(() => {
    if (title) {
      dispatch(fetchSearchBooks(title));
    }
  }, [dispatch, title]);

  return (
    <div>
      <h1>Search</h1>
      <h1>‘beginners’ Search results</h1>
      <Link to={ROUTE.FAVORITE}>Go to favorite</Link>
      <Link to="/">Go to Home</Link>
      <Link to={ROUTE.DETAILS}>Go to details</Link>
      <Link to={ROUTE.RESETPASSWORD}>Go to Reset Password</Link>
      <Link to={ROUTE.SIGNUP}>Go to Sign up</Link>
      <div></div>
      < BookList books={books} />

      {isLoading && <Spinner />}
      {error && <div>{error}</div>}
      {books?.length > 0 && < BookList books={books} />}
      <FormSubscribe />
    </div>
  );
};



// { isLoading && (<Spinner />) }//е загрузка, то отобр спиннер
// books?.length -е у нас есть books и их дл >0, то отобр список книг

//!!!  на стр поиска, дитэйлс, карт, аккаунт тоже асинхр код