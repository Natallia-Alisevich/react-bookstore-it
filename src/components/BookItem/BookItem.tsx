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
import { Star } from "components/StarRating/StarRating";


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
                    {/* <Star stars={+book.rating} /> */}
                    {book.rating ? <Star stars={+book.rating} /> : <Star stars={2} />}
                </WrapPrice>
                {/* <Rate>{book.rating}</Rate> */}
            </BookInfoWrapper>
        </BookCard>
    );
};


//ч! динамически сгенерировать линк переходим в Utilities => generatePath
// ГОВОРЮ: <Link to={generatePath(ROUTE.DETAILS)}> ссылка сгенерируй мне путь
// и принимает (при наведении на него) ориджиналпэс(путь), а путь у нас в енаме в роуте

// ч вернуться назад нужна кнопка "назад" в detailpage: