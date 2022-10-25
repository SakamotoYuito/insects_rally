import Layout from "pages/layout";
import MyProgressBar from "components/Progress";
import { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "utils/firebase";
import { useAuthContext } from "components/Header/loginObserver";

const Home = () => {
  const [progressValueList, setProgressValueList] = useState([0, 0, 0, 0]);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [currentStatus, setCurrentStatus] = useState("");
  const { userInfo } = useAuthContext();
  const uid = userInfo?.uid;

  useEffect(() => {
    (async () => {
      const usersCollectionRef = uid
        ? query(collection(db, "userStatus"), where("uid", "==", uid))
        : query(collection(db, "userStatus"), where("uid", "==", ""));
      const querySnapshot = await getDocs(usersCollectionRef);
      querySnapshot.docs.map((doc) => {
        const status = doc.data().status;
        setCurrentStatus(status);
        const progress = doc.data().progress > 100 ? 100 : doc.data().progress;
        setCurrentProgress(progress);
        setProgressValueList(calcProgressValue(progress));
      });
    })();
  }, [uid, currentProgress]);

  return (
    <Layout>
      <h1>ステータス</h1>
      <MyProgressBar
        currentStatus={currentStatus}
        currentProgress={currentProgress}
        progressValueList={progressValueList}
      />
    </Layout>
  );
};

const calcProgressValue = (currentProgress: number) => {
  const quotient = ~~(currentProgress / 25);
  const remainder = currentProgress % 25;
  const progressValueList = new Array<number>(4).fill(0).map((value, index) => {
    if (index < quotient) {
      return value + 25;
    } else if (index === quotient) {
      return value + remainder;
    } else {
      return value;
    }
  });
  return progressValueList;
};

export default Home;
