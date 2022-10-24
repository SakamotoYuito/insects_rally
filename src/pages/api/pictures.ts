import type { NextApiRequest, NextApiResponse } from "next";
import { adminDB } from "utils/server";
import { InsectsInfo } from "components/Card/PictureCard";

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response: InsectsInfo[] = [];
  const querySnapshot = await adminDB.collection("pictures").get();
  querySnapshot.forEach((doc) => {
    response.push(doc.data() as InsectsInfo);
    console.log(doc.data());
  });
  res.status(200);
}
