import { useRouter } from "next/router";
import { useAuthContext } from "components/Header/loginObserver";
import { writeUserLog, writePlaceLog, UserLog, PlaceLog } from "utils/writeLog";
import Layout from "pages/layout";
import { ParsedUrlQuery } from "querystring";
import { db } from "utils/firebase";
import {
  collection,
  query,
  where,
  doc,
  getDocs,
  updateDoc,
  DocumentData,
} from "firebase/firestore";
import { Button } from "react-bootstrap";
import styles from "./style.module.scss";

const Qrcode = () => {
  const router = useRouter();
  const queryPram = router.query;
  const { userInfo } = useAuthContext();
  const uid = userInfo?.uid ?? "";
  const place = queryPram.place as string;

  if (uid !== "") {
    updatePlaceState(uid, queryPram);
  }

  return (
    <Layout footer={false}>
      <div className={styles.container}>
        <Button
          className={styles.button}
          onClick={() => {
            updateUserStatus(uid, place);
            router.push("/search");
          }}
        >
          このクイズを解放する
        </Button>
      </div>
    </Layout>
  );
};

const writeLog = (
  uid: string,
  queryPram: ParsedUrlQuery,
  congestion: number
) => {
  const userLog: UserLog = {
    uid: uid as string,
    state: `read-${queryPram.type}`,
    place: queryPram.place as string,
  };
  const placeLog: PlaceLog = {
    type: "qr",
    place: queryPram.place as string,
    congestion: congestion,
  };
  (async (userLog: UserLog, placeLog: PlaceLog) => {
    await writeUserLog(userLog);
    await writePlaceLog(placeLog);
  })(userLog, placeLog);
};

const updatePlaceState = (uid: string, queryPram: ParsedUrlQuery) => {
  (async () => {
    const collectionRef = query(
      collection(db, "placeState"),
      where("place", "==", queryPram.place)
    );
    const querySnapshot = await getDocs(collectionRef);
    const [docData] = querySnapshot.docs.map((doc) => {
      return {
        data: doc.data(),
        id: doc.id,
      };
    });
    const updateUids: Set<string> = new Set(docData.data.uids);
    updateUids.add(uid);
    const congestion = updateUids.size;
    writeLog(uid, queryPram, congestion);
    await updateDoc(doc(db, "placeState", docData.id), {
      congestion: congestion,
      uids: Array.from(updateUids),
    });
  })();
};

const getCongestion = (uid: string, data: DocumentData) => {
  const updateUids: Set<string> = new Set(data.uids);
  updateUids.add(uid);
  const congestion = updateUids.size;
  return congestion;
};

const updateUserStatus = (uid: string, place: string) => {
  (async () => {
    const collectionRef = query(
      collection(db, "userStatus"),
      where("uid", "==", uid)
    );
    const querySnapshot = await getDocs(collectionRef);
    const [docData] = querySnapshot.docs.map((doc) => {
      return {
        data: doc.data(),
        id: doc.id,
      };
    });
    const quests = docData.data.quests;
    const quizId = Number(place.split("-")[1]);
    quests[quizId - 1] = "accept";
    await updateDoc(doc(db, "userStatus", docData.id), {
      currentPlace: place,
      quests: quests,
      state: "accept",
    });
  })();
};

export default Qrcode;
