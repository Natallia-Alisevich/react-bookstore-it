import { BooksInfo } from "types/types";
import { BookItem } from "components/BookItem/BookItem";
import { BooksWrapper } from "./styles";
interface BookListProps {
  books: BooksInfo[];
}

export const BookList = ({ books }: BookListProps) => {
  return (
    <BooksWrapper>
      {books.map((book) => {
        return <BookItem book={book} />;
      })}
    </BooksWrapper>
  );
};

