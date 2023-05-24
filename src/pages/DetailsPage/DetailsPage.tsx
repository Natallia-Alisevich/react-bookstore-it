import { BookList } from "components";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ROUTE } from "routes";
import { BookInfo } from "types";
import {
  DetailsBookBg, DetailsCard, DetailsCardInfo, DetailsDescr, DetailsInfoHead,
  DetailsPreview, DetailsPrice, DetailsTitle,
  InfoWrap,
  StyledButton
} from "./styles";



export const DetailsPage = () => {
  const [detailsBook, setDetailsBook] = useState<BookInfo>();
  // Ч посмотреть , что приходит с бэкэнда смотрим консоль лог:
  // console.log(book);//[]


  // const result = useParams();
  // console.log(result);  //{name: 'Barbados'}
  // // const result = useParams() можно деструктуризи-ть, это будет:
  const { isbn13 } = useParams();//пар-р name из routes.ts :  DETAILS 
  // console.log(isbn13);//Barbados
  const navigate = useNavigate();// отправляет нас куда нам нужно

  const handleBack = () => { //ф-я возвращ на стр-цу нам нужную,
    // хранит весь путь перехода по ссылкам navigate(ROUTE.HOME)
    navigate(-1);// вернись на стр назад
  };

  //если я на стр-це detailsPage при переключении роутов имею разное имя,
  // то мне нужно при каждом переключении на страницу делать запрос,
  // поэт нужен юзэффект:
  useEffect(() => {
    fetch(`https://api.itbook.store/1.0/books/${isbn13}`)//запрос добавляем $ и `` 
      .then((response) => response.json())
      // .then((response) => { console.log(response.detailsBooks); });
      .then((response) => setDetailsBook(response));
  }, []);//устан-ю зависимость: кажд раз делай запрос, когда меняется name
  // }, [isbn13]);//устан-ю зависимость: кажд раз делай запрос, когда меняется name
  // ${name} получ из параметров благодаря: const { name } = useParams();
  //раз к нам приходят данные , то нам нужно их хранить исп-ем useState()


  return (
    <>
      <DetailsTitle>{detailsBook?.title}</DetailsTitle>
      <DetailsCard>
        <DetailsBookBg><img src={detailsBook?.image} alt={detailsBook?.title}></img></DetailsBookBg>
        <DetailsCardInfo>
          <DetailsInfoHead><DetailsPrice>{detailsBook?.price}</DetailsPrice>
            <h3>{detailsBook?.rating}</h3></DetailsInfoHead>
          <InfoWrap>Authors: <span>{detailsBook?.authors}</span></InfoWrap>
          <InfoWrap>Publisher: <span>{detailsBook?.publisher}</span></InfoWrap>
          <InfoWrap>Year: <span>{detailsBook?.year}</span></InfoWrap>
          <InfoWrap>Format: <span>Paper book/ebook (PDF)</span></InfoWrap>
          <StyledButton>add to cart</StyledButton>
          <DetailsPreview>Preview book</DetailsPreview>
        </DetailsCardInfo>
      </DetailsCard>


      <DetailsDescr>{detailsBook?.desc}</DetailsDescr>
      <Link to={ROUTE.HOME}>go to HOMEPAGE</Link>
      {/* или так: */}
      <button onClick={handleBack}>BACK</button>
    </>
  );
};
/* <p>{country[0].name.common}</p>//обращ к первому объекту и на странице в браузере 
появл название страны

// Хук useParams возвращает объект пар ключ / значение динамических
//  параметров из текущего URL - адреса, которые были сопоставлены 
/* < Route path >.Дочерние маршруты наследуют все параметры 
родительских маршрутов. */

