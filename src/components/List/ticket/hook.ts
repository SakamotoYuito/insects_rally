import { doc, updateDoc } from "firebase/firestore";
import { db } from "utils/firebase";

type DocId = string;

export const ticketHook = (docId: DocId) => {
  (async () => {
    await updateDoc(doc(db, "userStatus", docId), {
      ticket: "after",
    });
  })();
};
