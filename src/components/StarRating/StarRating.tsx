import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { Color } from "ui";


interface StarRatingProps {
    stars: number;
}
export const Star = ({ stars }: StarRatingProps) => {
    return (
        <div className="App">
            <Rating initialValue={stars} readonly fillColor={Color.Primary} size={14} />
        </div>
    );
};