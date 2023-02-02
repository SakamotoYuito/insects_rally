import React, { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";
import { useSignup } from "utils/firebase";
import MyTextForm from "components/Form/TextForm";
import styles from "./style.module.scss";

export const useSignupPage = () => {
  const { handleChangeEmail, handleCreateUser, error } = useSignup();
  const [validated, setValidated] = useState(false);
  const router = useRouter();

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
      <a>同意書</a>
      <div className={styles.concent}>
        <a>
          本イベントでは、参加者のクイズラリー中における回遊行動の軌跡をログとして記録します。また、イベント中、カメラ撮影、ビデオ撮影などの写真・映像記録を行う可能性があります。本イベントにて、得られたデータは京都産業大学棟方研究室の研究用途として使用する可能性があります。本イベントで得られたいかなるデータについて、統計的な処理を施し個人が特定できない形式で使用させていただきます。写真・映像記録について使用する際には，モザイク処理などを施して用います。以上の内容に問題ない場合は、ユーザIDを入力し、ユーザ登録ボタンをタップしてユーザ登録をしてください。
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
        buttonStr="新規登録"
        error={error}
      />
      <Button className={styles.login} onClick={() => router.push("/login")}>
        ログイン
      </Button>
    </div>
  );
};

export default useSignupPage;
