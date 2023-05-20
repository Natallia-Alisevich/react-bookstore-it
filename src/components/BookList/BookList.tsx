import React from "react";
import { Link, generatePath } from "react-router-dom";
import { ROUTE } from "../../routes";
import { BookInfo } from "types";
import { NewInfo } from "types/types";
// import { BookAPI } from "types";

interface BookListProps {
    newBooks?: NewInfo;
    detailsBook?: BookInfo;
}



export const BookList = ({ newBooks, detailsBook }: BookListProps) => {
    return (
        <div>
            {newBooks?.books.map((book) => {
                return <Link key={book.isbn13}
                    to={generatePath(ROUTE.DETAILS, { isbn13: book.isbn13 })}>
                    <div>
                        <img src={book.image} alt={book.title}></img>
                        <h4 >{book.title}</h4>
                    </div>
                </Link>;
            })}
        </div>
    );
};

//ч! динамически сгенерировать линк переходим в Utilities => generatePath
// ГОВОРЮ: <Link to={generatePath(ROUTE.DETAILS)}> ссылка сгенерируй мне путь
// и принимает (при наведении на него) ориджиналпэс(путь), а путь у нас в енаме в роуте

// ч вернуться назад нужна кнопка "назад" в detailpage: