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

  const { isbn13 } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };


  useEffect(() => {
    fetch(`https://api.itbook.store/1.0/books/${isbn13}`)
      .then((response) => response.json())
      .then((response) => setDetailsBook(response));
  }, []);
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
