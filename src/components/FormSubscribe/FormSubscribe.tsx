import React from "react";
// import { AddEmail, ButtonSubscribe, InputEmail, Subtitle, TitleForm } from "./styled";
// import { Button, Input } from "components";
import { Controller, useForm } from "react-hook-form";
import { StyledButton, StyledForm, StyledInput, Subtitle, Title, WrapValue } from "./styles";






export const FormSubscribe = () => {
    const { register, handleSubmit, control, formState: { errors } } = useForm();

    const onSubmit = () => console.log("ok");
    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <Title>Subscribe to Newsletter</Title>
            <Subtitle>
                Be the first to know about new IT books, upcoming releases,
                exclusive offers and more.
            </Subtitle>
            <WrapValue>
                <Controller
                    render={({ field }) =>
                        <StyledInput type="text"
                            {...register("mail", {
                                required: "Email Address is required",
                                maxLength: 20, pattern: /[A-Za-z|@|"."]+$/i
                            })}
                            aria-invalid={errors.mail ? "true" : "false"}
                            placeholder="Your email ..." />}
                    name="mail"
                    control={control}
                    defaultValue=""
                />
                {errors.mail?.type === "maxLength" && (
                    <p role="alert" style={{ color: "red" }}>
                        Проверь правильность ввода: символов не более 20
                    </p>
                )}
                {errors.mail?.type === "pattern" && (
                    <p role="alert" style={{ color: "red" }}>
                        Проверь правильность ввода:
                        вводить только буквы Aa-Zz и символ @
                    </p>
                )}
                <StyledButton type="submit">Subscribe</StyledButton>
            </WrapValue>

        </StyledForm>


        // <AddEmail onSubmit={handleSubmit(onSubmit)}>
        //     <TitleForm>Subscribe to Newsletter</TitleForm>
        //     <Subtitle>
        //         Be the first to know about new IT books, upcoming releases,
        //  exclusive offers and more.
        //     </Subtitle>
        //     <InputEmail placeholder="Your email" />
        //     <ButtonSubscribe type="submit">Subscribe</ButtonSubscribe>
        // </AddEmail>
    );
};