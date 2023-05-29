import React from "react";
import { BookInfo } from "types";
import {
  StyledItem,
  ItemBackgroundImage,
  ItemContent,
  ItemImage,
  ItemInfo,
  ItemPrice,
  ItemTitle,
  ItemCross,
  ItemAmount,
  ItemMinus,
  ItemPlus,
  AmountValue,
  ItemText,
} from "./styles";
import { removeProduct, selectCart } from "store";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";

interface productProps {
  product: BookInfo;
}

export const CartItem = ({ product }: productProps) => {
  const books = useAppSelector(selectCart);
  const dispatch = useAppDispatch();
  const { isbn13 } = useParams();
  const handleDeleteBook = () => {
    dispatch(removeProduct(isbn13));
  };
  return (
    <StyledItem key={product.isbn13}>
      <ItemBackgroundImage>
        <ItemImage src={product.image} alt={product.title} />
      </ItemBackgroundImage>
      <ItemContent>
        <ItemText>
          <ItemTitle>{product.title}</ItemTitle>
          <ItemInfo>
            {product.authors}, {product.publisher}, {product.year}
          </ItemInfo>
          <ItemAmount>
            <ItemMinus>
              "-"
            </ItemMinus>
            <AmountValue>1</AmountValue>
            <ItemPlus>
              "+"
            </ItemPlus>
          </ItemAmount>
        </ItemText>
        <ItemPrice>{product.price}</ItemPrice>
        <ItemCross onClick={handleDeleteBook}>
          "X"
        </ItemCross>
      </ItemContent>
    </StyledItem>
  );
};