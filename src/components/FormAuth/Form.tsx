import React, { ReactNode } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { StyledButton, StyledForm } from "./styles";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "services";
import { useAppDispatch } from "store/hooks/hooks";
import { fetchSignUpUser } from "store";

export interface AuthValue {
    email: string,
    password: string,
}
export interface FormProps {
    onSubmit: SubmitHandler<AuthValue>,
    children: ReactNode;
}



export const Form = ({ onSubmit, children }: FormProps) => {
    const { register, handleSubmit } = useForm<AuthValue>();
    const dispatch = useAppDispatch();

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("email")} placeholder="email" />
            <input type="password" {...register("password")} placeholder="password" />
            <StyledButton>sign UP</StyledButton>
        </StyledForm>
    )
}


