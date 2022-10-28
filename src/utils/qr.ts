import { db } from "utils/firebase";
import {
  collection,
  query,
  where,
  doc,
  getDocs,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { writeUserLog, writePlaceLog, UserLog, PlaceLog } from "utils/writeLog";

export const updatePlaceState = (uid: string, type: string, place: string) => {
  (async () => {
    const collectionRef = query(collection(db, "placeState"));
    const querySnapshot = await getDocs(collectionRef);
    const [placeState] = querySnapshot.docs.map((doc) => {
      const docData = doc.data();
      return docData[place];
    });
    const updateUids: Set<string> = new Set(placeState.uids);
    switch (type) {
      case "entrance":
        updateUids.add(uid);
        break;
      case "quiz":
        updateUids.add(uid);
        break;
      case "exit":
        updateUids.delete(uid);
        console.log(updateUids);
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
    await updateDoc(doc(db, "placeState", "place"), {
      [place]: {
        congestion: congestion,
        uids: Array.from(updateUids),
      },
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
        await updateDoc(doc(db, "userStatus", docData.id), {
          currentPlace: place,
        });
        break;
      case "exit":
        // TODO: arrangementコレクションからクイズの配置情報を読み取って、userStatusコレクションのpicturesを更新する
        const docSnap = await getDoc(doc(db, "picturesInRoom", place));
        if (!docSnap.exists()) return;
        const picturesInRoom: string[] = docSnap.data().pictures;
        const currentPicturesState = docData.data.pictures;
        picturesInRoom.forEach((data) => {
          const place = data.split("-")[0];
          const id = Number(data.split("-")[1]);
          currentPicturesState[place][id - 1] = true;
        });
        console.log(currentPicturesState);
        await updateDoc(doc(db, "userStatus", docData.id), {
          currentPlace: "none",
          pictures: currentPicturesState,
          reward: "none",
        });
        break;
      case "lastTest":
        // qr?type=lastTest&place=lastTest
        const currentProgress = docData.data.progress;
        await updateDoc(doc(db, "userStatus", docData.id), {
          progress: currentProgress + 60,
          status: "生き物博士",
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
    const updatedCheckIn = docData.data.checkIn === true ? false : true;
    await updateDoc(doc(db, "users", docData.id), {
      checkIn: updatedCheckIn,
      mode: mode,
    });
  })();
};
