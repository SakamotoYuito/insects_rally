import { db } from "utils/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export type UserLog = {
  uid: string;
  state: string;
  place: string;
};

export type PlaceLog = {
  uids: string[];
  type: "qr" | "camera";
  place: string;
  congestion: number;
};

const userLogCollection = "userLogFirstDay";
const placeLogCollection = "placeLogFirstDay";

export const writeUserLog = async (log: UserLog) => {
  await addDoc(collection(db, userLogCollection), {
    uid: log.uid,
    state: log.state,
    place: log.place,
    time: Timestamp.now(),
  });
};

export const writePlaceLog = async (log: PlaceLog) => {
  await addDoc(collection(db, placeLogCollection), {
    uids: log.uids,
    type: log.type,
    place: log.place,
    congestion: log.congestion,
    time: Timestamp.now(),
  });
};
