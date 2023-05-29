import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { StyledButton, StyledForm } from "./styles";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "services";

interface AuthValues {
    email: string,
    password: string,
}



export const Form = ({ email, password }: AuthValues) => {
    const { register, handleSubmit } = useForm<AuthValues>();

    const onSubmit: SubmitHandler<AuthValues> = ({ email, password }: AuthValues) => {

        createUserWithEmailAndPassword(auth, email, password).then((userCredential) =>
        {

            console.log(userCredential);

            //     const user = userCredential.user;
            // })
            //     .catch((error) => {
            //         const errorCode = error.code;
            //         const errorMessage = error.message;
            //         // ..
        });
    }
    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("email")} placeholder="email" />
            <input type="password" {...register("password")} placeholder="password" />
            <StyledButton>sign UP</StyledButton>
        </StyledForm>
    )
}


