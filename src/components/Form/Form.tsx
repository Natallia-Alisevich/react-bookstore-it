import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { StyledForm } from "./styles";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "services";



// Создаем форму, позволяющую новым пользователям регистрироваться
// в приложении, используя свой адрес электронной почты и пароль.
// Когда пользователь заполняет форму, подтверждаем адрес электронной
// почты и пароль, предоставленные пользователем, а затем передаем
// их методу createUserWithEmailAndPassword:

interface AuthValues {
    email: string,
    password: string,
}



export const Form = () => {
    const { register, handleSubmit } = useForm<AuthValues>();

    const onSubmit: SubmitHandler<AuthValues> = ({ email, password }: AuthValues) => {

        createUserWithEmailAndPassword(auth, email, password).then((userCredential) =>
        //из формы получили данные
        //  о польз-ле, емэйл и пароль и передали в "createUserWithEmailAndPassword"
        // (эта ф-я из firebase).После вып-я ф-ции (она сделает запрос и вернет нам данные 
        // в виде объекта), кот попадут в then.(userCredential)
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
            <button>Submit</button>
        </StyledForm>
    )
}


