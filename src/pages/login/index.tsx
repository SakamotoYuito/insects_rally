import React, { useState } from "react";
import { useLogin } from "utils/firebase/firebase";
import MyTextForm from "components/Form/TextForm";
import Link from "next/link";

export const useLoginPage = () => {
  const { handleChangeEmail, handleSignInUser, error } = useLogin();
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
    console.log("a", error);
  };
  return (
    <div>
      <h1>タイトル</h1>
      <MyTextForm
        validated={validated}
        label="ユーザーID"
        type="text"
        placeHolder="ユーザーID"
        feedback="ユーザーIDを入力してください"
        onSubmit={(e) => {
          e !== undefined ? handleSubmit(e) : null;
        }}
        onChange={(e) => handleChangeEmail(e)}
        buttonStr="ログイン"
        error={error}
      />
      <Link href="/signup">
        <p>初めての方はこちら</p>
      </Link>
    </div>
  );
};

export default useLoginPage;
