import React, { useState } from "react";
import { useSignup } from "utils/firebase/firebase";
import MyForm from "components/Form";

export const signupPage = () => {
  const { handleChangeEmail, handleCreateUser } = useSignup();
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
    await handleCreateUser();
  };

  return (
    <div>
      <h1>タイトル</h1>
      <MyForm
        validated={validated}
        label="ユーザーID"
        type="text"
        placeHolder="ユーザーID"
        feedback="ユーザーIDを入力してください"
        onSubmit={(e) => handleSubmit(e)}
        onChange={(e) => handleChangeEmail(e)}
        buttonStr="ユーザー登録"
      />
    </div>
  );
};

export default signupPage;
