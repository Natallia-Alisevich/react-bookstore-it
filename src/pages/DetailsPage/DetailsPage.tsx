import { FormSubscribe, TabBooks } from "components";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BookInfo } from "types";
import {
  BackIcon,
  DetailsBookBg, DetailsCard, DetailsCardInfo, DetailsInfoHead,
  DetailsPreview, DetailsPrice, DetailsTitle,
  InfoWrap,
  StyledButton
} from "./styles";
import { Star } from "components/StarRating/StarRating";
import { selectCart, addToCart } from "store";
import { useAppSelector, useAppDispatch } from "store/hooks/hooks";
import { ArrowBackIcon } from "assets";



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
  const { products } = useAppSelector(selectCart);
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({
      title: "IT Books",
      subtitle: "IT Books",
      isbn13: "jkjj",
      price: "37",
      image: "",
      url: "",

    }))
  };

  return (
    <>
      <BackIcon onClick={handleBack}><ArrowBackIcon /></BackIcon>
      <DetailsTitle>{detailsBook?.title}</DetailsTitle>
      <DetailsCard>
        <DetailsBookBg><img src={detailsBook?.image} alt={detailsBook?.title}></img></DetailsBookBg>
        <DetailsCardInfo>
          <DetailsInfoHead><DetailsPrice>{detailsBook?.price}</DetailsPrice>
            {detailsBook?.rating !== undefined && <Star stars={+detailsBook?.rating} />}
          </DetailsInfoHead>
          <InfoWrap>Authors: <span>{detailsBook?.authors}</span></InfoWrap>
          <InfoWrap>Publisher: <span>{detailsBook?.publisher}</span></InfoWrap>
          <InfoWrap>Year: <span>{detailsBook?.year}</span></InfoWrap>
          <InfoWrap>Format: <span>Paper book/ebook (PDF)</span></InfoWrap>
          <StyledButton onClick={handleAddToCart}>add to cart</StyledButton>
          <DetailsPreview>Preview book</DetailsPreview>
        </DetailsCardInfo>
      </DetailsCard>
      <TabBooks />
      <FormSubscribe />
    </>
  );
};
/* <p>{country[0].name.common}</p>//обращ к первому объекту и на странице в браузере 
появл название страны

// Хук useParams возвращает объект пар ключ / значение динамических
//  параметров из текущего URL - адреса, которые были сопоставлены 
/* < Route path >.Дочерние маршруты наследуют все параметры 
родительских маршрутов. */

