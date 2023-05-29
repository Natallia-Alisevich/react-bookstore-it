import styled from "styled-components";
import { Color } from "ui";
import { Head2, Head3, SubText } from "ui/typography";

const StyledItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 49px;
  border-bottom: 1px solid ${Color.Blue};
`;
const ItemBackgroundImage = styled.div`
  display: flex;
  justify-content: center;
  max-width: 256px;
  width: 100%;
  background-color: ${Color.Green};
`;
const ItemImage = styled.img`
  max-width: 164px;
`;
const ItemContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: 32px;
`;
const ItemText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 300px;
`;
const ItemTitle = styled.p`
  ${Head3}
`;
const ItemInfo = styled.p`
  ${SubText}
`;
const ItemAmount = styled.p`
  display: flex;
  align-items: center;
`;
const ItemPrice = styled.p`
  ${Head2}
`;
const ItemCross = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
const ItemPlus = styled.button`
  padding: 16px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
const ItemMinus = styled.button`
  padding: 16px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
const AmountValue = styled.p`
  ${Head3}
`;
export {
  StyledItem,
  ItemBackgroundImage,
  ItemImage,
  ItemInfo,
  ItemContent,
  ItemTitle,
  ItemPrice,
  ItemCross,
  ItemAmount,
  ItemPlus,
  ItemMinus,
  AmountValue,
  ItemText,
};
