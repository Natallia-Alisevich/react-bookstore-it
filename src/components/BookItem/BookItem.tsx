import React from "react";
import { Link, generatePath } from "react-router-dom";
import { ROUTE } from "routes";
import { BooksInfo } from "types";
import {

    BookCard,
    StyledCardImg,
    ImageWrapper,
    BookPrice,
    StyledTitle,
    BookAuth,
    BookInfoWrapper,
    WrapPrice,
} from "./styles";
import { Star } from "components";


interface BookItemProps {
    book: BooksInfo;
}

export const BookItem = ({ book }: BookItemProps) => {
    console.log({ book });
    return (
        <BookCard>
            <Link key={book.isbn13}
                to={generatePath(ROUTE.DETAILS, { isbn13: book.isbn13 })}>
                <ImageWrapper>
                    <StyledCardImg src={book.image} alt={book.title}></StyledCardImg>
                </ImageWrapper>
            </Link>
            <BookInfoWrapper>
                <StyledTitle>{book.title}</StyledTitle>
                <BookAuth>{book.subtitle}</BookAuth>
                <WrapPrice>
                    <BookPrice > {book.price}</BookPrice>
                    {book.rating ? <Star stars={+book.rating} /> : <Star stars={4} />}
                </WrapPrice>
            </BookInfoWrapper>
        </BookCard>
    );
};
