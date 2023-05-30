import { BookList, FormSearch, FormSubscribe, Spinner } from "components";
import { BookItem } from "components/BookItem/BookItem";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
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
  const { register, handleSubmit } = useForm();

  const dispatch = useAppDispatch();

  const onSubmit = ({ searchValue }: any) => { dispatch(fetchSearchBooks(searchValue)) };

  interface SearchState extends SearchInfo {
    isLoading: boolean;
  }

  const [search, setSearchBooks] = useState<SearchState>();

  useEffect(() => {
    if (title) {
      dispatch(fetchSearchBooks(title));
    }
  }, [dispatch, title]);

  return (
    <div>
      <h1>Search</h1>
      <h1>‘beginners’ Search results</h1>
      <div></div>
      {isLoading && <Spinner />}
      {error && <div>{error}</div>}
      {books?.length > 0 && < BookList books={books} />}
      <FormSubscribe />
    </div>
  );
};
