import ListComponent, { QuizList } from "..";
import { useState, useLayoutEffect } from "react";
import { useAuthContext } from "components/Header/loginObserver";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "utils/firebase";

type Props = {
  quiz: QuizList[];
};

type QuizStatus = "unanswered" | "accept" | "correct" | "incorrect";

const SearchList = (props: Props) => {
  const [quizStatus, setQuizStatus] = useState<QuizStatus[]>([]);
  const { userInfo } = useAuthContext();
  const uid = userInfo?.uid;

  useLayoutEffect(() => {
    if (uid !== undefined) {
      (async () => {
        const usersCollectionRef = query(
          collection(db, "userStatus"),
          where("uid", "==", uid)
        );
        const querySnapshot = await getDocs(usersCollectionRef);
        querySnapshot.docs.map((doc) => {
          const userData = doc.data();
          setQuizStatus(userData.quests);
        });
      })();
    }
  }, [uid]);

  return (
    <>
      {props.quiz.map((quizObj: QuizList, index: number) => (
        <div key={quizObj.id}>
          <ListComponent quiz={quizObj} valid={quizStatus[index]} />
        </div>
      ))}
    </>
  );
};

export default SearchList;
