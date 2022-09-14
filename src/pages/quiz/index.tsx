import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Layout from "pages/layout";
import MyRadioForm from "components/Form/RadioForm";
import MyTextForm from "components/Form/TextForm";
import useGetQuiz from "./hook";
import Check from "assets/icon/check.svg";
import Cross from "assets/icon/cross.svg";
import styles from "./style.module.scss";

const Quiz = () => {
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [validated, setValidated] = useState(false);
  const [userAnswer, setUserAnswer] = useState<string | number>("");

  const router = useRouter();
  const quizNumber = router.query.id;
  const type = "Radio";
  const sentence = useGetQuiz();
  const labels = ["オス", "メス"];
  const buttonStr = "回答する";
  const correctNumber = 1;
  const correctAnswer = labels[correctNumber - 1];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
    setIsAnswered(true);
    correctAnswer === userAnswer ? setIsCorrect(true) : setIsCorrect(false);
  };

  return (
    <Layout>
      <div className={styles.title}>
        <h1>問題{quizNumber}</h1>
        <div className={styles.clearMark}>
          {isCorrect === true && isAnswered === true && <Image src={Check} />}
          {isCorrect === false && isAnswered === true && <Image src={Cross} />}
        </div>
      </div>
      <p className={styles.sentence}>{sentence}</p>
      {type === "Radio" && isCorrect === null && isAnswered === false && (
        <MyRadioForm
          labels={labels}
          buttonStr={buttonStr}
          onSubmit={(e) => handleSubmit(e)}
          answer={userAnswer}
          onChange={(e) => setUserAnswer(e.currentTarget.value)}
        />
      )}
      {type !== "Radio" && isCorrect === null && isAnswered === false && (
        <MyTextForm
          validated={validated}
          label="ユーザーID"
          type="text"
          placeHolder="ユーザーID"
          feedback="ユーザーIDを入力してください"
          onSubmit={(e) => {
            e !== undefined ? handleSubmit(e) : null;
          }}
          onChange={(e) => {
            e !== undefined ? setUserAnswer(e.currentTarget.value) : null;
          }}
          buttonStr="ログイン"
          error="もう一度入力してください"
        />
      )}
      {isCorrect === true && isAnswered === true && (
        <div className={styles.correct}>
          <p className={styles.announce}>正解です</p>
          <h2 className={styles.answer}>正解：{correctAnswer}</h2>
        </div>
      )}
      {isCorrect === false && isAnswered === true && (
        <div className={styles.incorrect}>
          <p className={styles.announce}>ざんねん…不正解です…</p>
          <h2 className={styles.answer}>正解：{correctAnswer}</h2>
        </div>
      )}
    </Layout>
  );
};

export default Quiz;
