import React from "react";
import { Link, generatePath } from "react-router-dom";
import { ROUTE } from "routes";
import { BooksInfo } from "types";
import {

    BookCard,
    StyledCardImg,
    BookInfo,
    ImageWrapper,
    BookPrice,
    StyledTitle,
    BookAuth,
    Rate
} from "./styles";


interface BookItemProps {
    book: BooksInfo;
}



export const BookItem = ({ book }: BookItemProps) => {
    return (
        <BookCard>
            <Link key={book.isbn13}
                to={generatePath(ROUTE.DETAILS, { isbn13: book.isbn13 })}>
                <ImageWrapper>
                    <StyledCardImg src={book.image} alt={book.title}></StyledCardImg>
                </ImageWrapper>
            </Link>
            <BookInfo>
                <StyledTitle>{book.title}</StyledTitle>
                <BookAuth>{book.subtitle}</BookAuth>
                <BookPrice > {book.price}</BookPrice>
                <Rate>{book.rating}</Rate>
            </BookInfo>

        </BookCard>
    );
};


//ч! динамически сгенерировать линк переходим в Utilities => generatePath
// ГОВОРЮ: <Link to={generatePath(ROUTE.DETAILS)}> ссылка сгенерируй мне путь
// и принимает (при наведении на него) ориджиналпэс(путь), а путь у нас в енаме в роуте

// ч вернуться назад нужна кнопка "назад" в detailpage: