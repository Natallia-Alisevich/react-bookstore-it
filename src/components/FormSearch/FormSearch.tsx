import { BookList, Spinner } from "components";
import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useParams, useSearchParams } from "react-router-dom";
import { ROUTE } from "routes";
import { fetchSearchBooks } from "store";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { selectSearch } from "store/selectors/searchSelector";
import { SearchInfo } from "types";
import { SearchIcon, StyledButton, StyledForm, StyledInput } from "./styles";

export const FormSearch = () => {
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
    return (<>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <Link to={ROUTE.SEARCH}>
                <StyledInput type="text"  {...register("searchValue")} placeholder="Search" />
                <SearchIcon />
            </Link>
            <StyledButton type="submit">Search</StyledButton>
        </StyledForm>
    </>
    )
}

