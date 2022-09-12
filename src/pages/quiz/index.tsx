import { useState } from "react";
import Layout from "pages/layout";
import { useRouter } from "next/router";
import { useGetQuiz } from "./hook";
import MyRadioForm from "components/Form/RadioForm";
import MyTextForm from "components/Form/TextForm";

type FormType = "Radio" | "Text";

const Quiz = () => {
  const [correct, setCorrect] = useState(false);
  const [validated, setValidated] = useState(false);
  const [answer, setAnswer] = useState<string>("");

  const router = useRouter();
  const quizNumber = router.query.id;
  const type = "Radio";
  const sentence = useGetQuiz();
  const labels = ["オス", "メス"];
  const buttonStr = "回答する";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
    setCorrect(true);
  };

  return (
    <Layout>
      <h1>問題{quizNumber}</h1>
      <p>{sentence}</p>
      {type === "Radio" && correct === false && (
        <MyRadioForm
          labels={labels}
          buttonStr={buttonStr}
          onSubmit={() => setCorrect(true)}
        />
      )}
      {type !== "Radio" && correct === false && (
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
            e !== undefined ? setAnswer(e.currentTarget.value) : null;
          }}
          buttonStr="ログイン"
          error="もう一度入力してください"
        />
      )}
      {correct === true ? (
        <div className="answer">
          <p>正解です</p>
          {/* <p></p> */}
        </div>
      ) : null}
    </Layout>
  );
};

export default Quiz;
