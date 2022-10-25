import React from "react";
import { ProgressBar } from "react-bootstrap";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "utils/firebase";
import { useState, useEffect } from "react";
import { useAuthContext } from "components/Header/loginObserver";
import styles from "./style.module.scss";

const MyProgressBar = () => {
  const [progressValueList, setProgressValueList] = useState([0, 0, 0, 0]);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [currentStatus, setCurrentStatus] = useState("");
  const { userInfo } = useAuthContext();
  const uid = userInfo?.uid;

  useEffect(() => {
    const usersCollectionRef = uid
      ? query(collection(db, "userStatus"), where("uid", "==", uid))
      : query(collection(db, "userStatus"), where("uid", "==", ""));
    (async () => {
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
    <div className={styles.progressBar}>
      <div className={styles.title}>
        <a>Lv. {currentStatus}</a>
      </div>
      <ProgressBar>
        <ProgressBar
          striped
          variant="info"
          now={progressValueList[0]}
          key={1}
        />
        <ProgressBar striped now={progressValueList[1]} key={2} />
        <ProgressBar
          striped
          variant="warning"
          now={progressValueList[2]}
          key={3}
        />
        <ProgressBar
          striped
          variant="danger"
          now={progressValueList[3]}
          key={4}
        />
      </ProgressBar>
      <div className={styles.label}>
        <a>{currentProgress}/100</a>
      </div>
    </div>
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

export default MyProgressBar;
