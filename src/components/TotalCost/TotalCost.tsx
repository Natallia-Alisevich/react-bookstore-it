import React from "react";
import { Sum, Total, Wrapper } from "./styles";

interface TotalCostProps {
    totalCost: number;
}

export const TotalCost = ({ totalCost }: TotalCostProps) => {
    return (
        <Wrapper>
            <Sum>Sum total: {totalCost}</Sum>
            <Sum>VAT: {totalCost}</Sum>
            <Total>Total: {totalCost}</Total>
        </Wrapper>
    );
};