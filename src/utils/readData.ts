import {
  collection,
  query,
  where,
  onSnapshot,
  getDocs,
  QuerySnapshot,
  DocumentData,
} from "firebase/firestore";
import { db, auth } from "utils/firebase";

type DataPlaceAndMethod = {
  whichCollection: string;
  method?: (querySnapshot: QuerySnapshot<DocumentData>) => any;
};

const uid = auth.currentUser;

export const realtimerGetData = (dataPlaceAndMethod: DataPlaceAndMethod) => {
  const uidQuery = query(
    collection(db, dataPlaceAndMethod.whichCollection),
    where("uid", "==", uid)
  );
  const unsubscribe = onSnapshot(uidQuery, (querySnapshot) => {
    if (dataPlaceAndMethod.method) {
      dataPlaceAndMethod.method(querySnapshot);
    } else {
      return querySnapshot;
    }
  });
};

export const oneTimeGetData = async (
  dataPlaceAndMethod: DataPlaceAndMethod
) => {
  const uidQuery = query(
    collection(db, dataPlaceAndMethod.whichCollection),
    where("uid", "==", uid)
  );
  const querySnapshot = await getDocs(uidQuery);
  if (dataPlaceAndMethod.method) {
    dataPlaceAndMethod.method(querySnapshot);
  } else {
    return querySnapshot;
  }
};
