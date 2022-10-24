import { memo } from "react";
import Layout from "pages/layout";
import PictureCard, { InsectsInfo } from "components/Card/PictureCard";
import { adminDB } from "utils/server";
import { useState, useEffect } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "utils/firebase";
import { useAuthContext } from "components/Header/loginObserver";

type Props = {
  mtList: InsectsInfo[];
  rvList: InsectsInfo[];
  gdList: InsectsInfo[];
};

const Picture = (props: Props) => {
  const { userInfo } = useAuthContext();
  const uid = userInfo?.uid;

  return (
    <Layout>
      <PictureCard
        mtCardItems={props.mtList}
        rvCardItems={props.rvList}
        gdCardItems={props.gdList}
      />
    </Layout>
  );
};

export async function getStaticProps() {
  const mtList: InsectsInfo[] = [];
  const rvList: InsectsInfo[] = [];
  const gdList: InsectsInfo[] = [];

  const querySnapshot = await adminDB.collection("pictures").get();
  querySnapshot.forEach((doc) => {
    const data = doc.data() as InsectsInfo;
    const place = data.place;
    switch (place) {
      case "mt":
        mtList.push(data);
        break;
      case "rv":
        rvList.push(data);
        break;
      case "gd":
        gdList.push(data);
        break;
    }
  });

  return {
    props: {
      mtList: mtList,
      rvList: rvList,
      gdList: gdList,
    },
  };
}

export default Picture;
