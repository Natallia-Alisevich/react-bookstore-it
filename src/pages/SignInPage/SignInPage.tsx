
import { AuthValue, Form, Modal } from "components";
import React, { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { fetchSignUpUser } from "store";
import { useAppDispatch } from "store/hooks/hooks";

interface SignInData {
  email: string;
  password: string;
}


export const SignInPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  const toogleModal = () => {
    setIsOpen((prev) => !prev);
  }
  const onSubmit: SubmitHandler<AuthValue> = (data) => {
    dispatch(fetchSignUpUser(data))
      .unwrap()
      .then(() => {
        toogleModal()
      })
  }

  return (<>
    <div>SignInPage</div>
    <Form onSubmit={onSubmit} children={undefined} />

    {isOpen && <Modal handleClose={toogleModal} />}
  </>

  );
};