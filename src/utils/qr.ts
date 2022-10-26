import { db } from "utils/firebase";
import {
  collection,
  query,
  where,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { writeUserLog, writePlaceLog, UserLog, PlaceLog } from "utils/writeLog";

export const updatePlaceState = (uid: string, type: string, place: string) => {
  (async () => {
    const collectionRef = query(
      collection(db, "placeState"),
      where("place", "==", place)
    );
    const querySnapshot = await getDocs(collectionRef);
    const [docData] = querySnapshot.docs.map((doc) => {
      return {
        data: doc.data(),
        id: doc.id,
      };
    });
    const updateUids: Set<string> = new Set(docData.data.uids);
    switch (type) {
      case "entrance" || "quiz":
        updateUids.add(uid);
        break;
      case "exit":
        updateUids.delete(uid);
        break;
    }
    const congestion = updateUids.size;
    const placeLog: PlaceLog = {
      uids: Array.from(updateUids),
      type: "qr",
      place: place,
      congestion: congestion,
    };
    await writePlaceLog(placeLog);
    await updateDoc(doc(db, "placeState", docData.id), {
      congestion: congestion,
      uids: Array.from(updateUids),
    });
  })();
};

export const updateUserStatus = (uid: string, type: string, place: string) => {
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
    const userLog: UserLog = {
      uid: uid,
      state: `read-${type}`,
      place: place,
    };
    await writeUserLog(userLog);

    switch (type) {
      case "quiz":
        const quests = docData.data.quests;
        quests[place] = "accept";
        await updateDoc(doc(db, "userStatus", docData.id), {
          currentPlace: place,
          quests: quests,
          state: "accept",
        });
        break;
      case "entrance":
        console.log("entrance", place);
        await updateDoc(doc(db, "userStatus", docData.id), {
          currentPlace: place,
        });
        break;
      case "exit":
        // TODO: arrangementコレクションからクイズの配置情報を読み取って、userStatusコレクションのpicturesを更新する
        const pictures = docData.data.pictures;
        pictures.mt[0] = true;
        await updateDoc(doc(db, "userStatus", docData.id), {
          currentPlace: "none",
        });
        break;
    }
  })();
};

export const updateUsers = (
  uid: string,
  type: string,
  place: string,
  mode: string
) => {
  (async () => {
    const collectionRef = query(
      collection(db, "users"),
      where("uid", "==", uid)
    );
    const querySnapshot = await getDocs(collectionRef);
    const [docData] = querySnapshot.docs.map((doc) => {
      return {
        data: doc.data(),
        id: doc.id,
      };
    });
    const userLog: UserLog = {
      uid: uid,
      state: `read-${type}`,
      place: place,
    };
    await writeUserLog(userLog);
    await updateDoc(doc(db, "users", docData.id), {
      checkIn: true,
      mode: mode,
    });
  })();
};
