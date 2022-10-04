import React, { useState } from "react";
import { useLogin } from "utils/firebase";
import MyTextForm from "components/Form/TextForm";
import Link from "next/link";
import styles from "./style.module.scss";

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
  };
  return (
    <div className={styles.login}>
      <h1 className={styles.title}>謎解き写真展</h1>
      <div className={styles.form}>
        <MyTextForm
          validated={validated}
          // label="ユーザーID"
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
      </div>
      <Link href="/signup">
        <p className={styles.link}>初めての方はこちら</p>
      </Link>
    </div>
  );
};

export default useLoginPage;
