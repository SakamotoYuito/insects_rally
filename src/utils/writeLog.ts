import { db } from "utils/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export type Log = {
  uid: string;
  state: string;
  place: string;
};

const logCollection = "userLog1029";

export const writeLog = async (log: Log) => {
  await addDoc(collection(db, logCollection), {
    uid: log.uid,
    state: log.state,
    place: log.place,
    time: Timestamp.now(),
  });
};
