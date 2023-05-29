import { BookList, FormSubscribe, Spinner } from "components";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "routes";
import {
  fetchNewBooks, selectCart,
  selectNewBook
} from "store";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";


export const HomePage = () => {
  const { isLoading, books, error } = useAppSelector(selectNewBook);

  const dispatch = useAppDispatch();
  const { products } = useAppSelector(selectCart);

  useEffect(() => {
    dispatch(fetchNewBooks());
  }, [dispatch]);

  return (
    <div>
      <h1>New Releases Books</h1>
      {isLoading && <Spinner />}
      {error && <div>{error}</div>}
      {books?.length > 0 && < BookList books={books} />}
      <FormSubscribe />
    </div>
  );
};

