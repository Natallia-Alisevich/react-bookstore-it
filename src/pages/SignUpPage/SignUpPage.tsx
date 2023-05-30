import { AuthValue, Form, Modal } from "components";
import React, { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "routes";
import { fetchSignUpUser } from "store";
import { useAppDispatch } from "store/hooks/hooks";


export const SignUpPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  const toogleModal = () => {
    setIsOpen((prev) => !prev);
  }
  const onSubmit: SubmitHandler<AuthValue> = (data) => {
    dispatch(fetchSignUpUser(data)).then(() => {
      toogleModal()
    })
  }

  return (<>
    <div>SignUpPage</div>
    <Form onSubmit={onSubmit} children={undefined} />

    {isOpen && <Modal handleClose={toogleModal} />}
  </>

  );
};

