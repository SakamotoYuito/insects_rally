import Layout from "pages/layout";
import MyProgressBar from "components/Progress";
import TicketComponent from "components/List/ticket";
import MapComponent from "components/Map";
import { useState, useEffect } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { db } from "utils/firebase";
import { useAuthContext } from "components/Header/loginObserver";

const Home = () => {
  const [progressValueList, setProgressValueList] = useState([0, 0, 0, 0]);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [currentStatus, setCurrentStatus] = useState("");
  const [ticketData, setTicketData] = useState<
    "before" | "publication" | "after"
  >("before");
  const [rewardArea, setRewardArea] = useState("none");
  const [docId, setDocId] = useState("");
  const { userInfo } = useAuthContext();
  const uid = userInfo?.uid;

  useEffect(() => {
    const usersCollectionRef = uid
      ? query(collection(db, "userStatus"), where("uid", "==", uid))
      : query(collection(db, "userStatus"), where("uid", "==", ""));
    const unsubscribe = onSnapshot(usersCollectionRef, (querySnapshot) => {
      querySnapshot.docs.map((doc) => {
        const status = doc.data().status;
        const progress = doc.data().progress > 100 ? 100 : doc.data().progress;
        const ticket = doc.data().ticket;
        const area = doc.data().reward;
        setCurrentStatus(status);
        setCurrentProgress(progress);
        setProgressValueList(calcProgressValue(progress));
        setTicketData(ticket);
        setDocId(doc.id);
        setRewardArea(area);
      });
    });
    return () => {
      unsubscribe();
    };
  }, [uid, currentProgress, ticketData]);

  return (
    <Layout>
      <h1>ホーム</h1>
      <MapComponent area={rewardArea} />
      <MyProgressBar
        currentStatus={currentStatus}
        currentProgress={currentProgress}
        progressValueList={progressValueList}
      />
      <TicketComponent state={ticketData} docId={docId} />
    </Layout>
  );
};

const calcProgressValue = (currentProgress: number) => {
  if (currentProgress <= 25) {
    return [currentProgress, 0, 0, 0];
  } else if (currentProgress <= 50) {
    return [25, currentProgress - 25, 0, 0];
  } else if (currentProgress <= 75) {
    return [25, 25, currentProgress - 50, 0];
  } else if (currentProgress <= 100) {
    return [25, 25, 25, currentProgress - 75];
  } else if (currentProgress > 100) {
    return [25, 25, 25, 25];
  }
  return [0, 0, 0, 0];
};

export default Home;
