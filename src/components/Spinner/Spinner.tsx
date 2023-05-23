import React from "react";
import { TailSpin } from "react-loader-spinner";
export const Spinner = () => {
    return (


        <TailSpin
            height="60"
            width="60"
            color="grey"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    );
};

