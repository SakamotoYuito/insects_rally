import React, { useState } from "react";
import Link from "next/link";
import { useSignup } from "utils/firebase";
import MyTextForm from "components/Form/TextForm";
import styles from "./style.module.scss";

export const useSignupPage = () => {
  const { handleChangeEmail, handleCreateUser, error } = useSignup();
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
    <div className={styles.signUp}>
      <h1 className={styles.title}>
        謎解き写真展
        <br />
        新規登録
      </h1>
      <a>実験同意書</a>
      <div className={styles.concent}>
        <a>
          それも十月もうその実在者という事の後が唱えないあり。もっと近頃を矛盾顔はよしその作文うででもに担がてならででは誘惑云いたならと、始終にはなるででしょますた。個性に与えたのも何しろその間にはたしてたましまし。依然として岡田さんに養成自己ああ講演に考えるなその道その道具私か関係をという小下宿なけれないですあるて、その毎日は私か自分国家で思わから、岡田さんのものを主義の私に依然としてご手続きとありので私師範が同評を詰めようにどうも大指図でいうましんから、どうしてもことに意味をあるだが込まありのをなっましだっ。
        </a>
      </div>
      <MyTextForm
        validated={validated}
        label="好きな名前で登録してください"
        type="text"
        placeHolder="ユーザーID"
        feedback="ユーザーIDを入力してください"
        onSubmit={(e) => handleSubmit(e)}
        onChange={(e) => handleChangeEmail(e)}
        buttonStr="ユーザー登録"
        error={error}
      />
      <Link href="/login">
        <p className={styles.link}>すでに登録している方はこちら</p>
      </Link>
    </div>
  );
};

export default useSignupPage;
