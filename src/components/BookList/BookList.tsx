import React from "react";
import { Link, generatePath } from "react-router-dom";
import { ROUTE } from "../../routes";
import { BookInfo, BooksInfo, SearchInfo } from "types/types";
import { BookItem } from "components/BookItem/BookItem";
import { BooksWrapper } from "./styles";

interface BookListProps {
  books: BooksInfo[];
}

export const BookList = ({ books }: BookListProps) => {
  return (
    <BooksWrapper>
      {books.map((book) => {
        return <BookItem book={book}/>;
      })}
    </BooksWrapper>
  );
};

