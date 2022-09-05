import React, { useState } from "react";
import { useLogin } from "utils/firebase/firebase";
import MyForm from "components/Form";
import Link from "next/link";

export const loginPage = () => {
  const { handleChangeEmail, handleSignInUser } = useLogin();
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
    await handleSignInUser();
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
        buttonStr="ログイン"
      />
      <Link href="/signup">
        <p>初めての方はこちら</p>
      </Link>
    </div>
  );
};

export default loginPage;
