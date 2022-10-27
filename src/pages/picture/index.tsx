import { memo } from "react";
import Layout from "pages/layout";
import PictureCard, { InsectsInfo } from "components/Card/PictureCard";
import { adminDB } from "utils/server";
import { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "utils/firebase";
import { useAuthContext } from "components/Header/loginObserver";

type Props = {
  mtList: InsectsInfo[];
  rvList: InsectsInfo[];
  gdList: InsectsInfo[];
};

type CurrentState = {
  mt: boolean[];
  rv: boolean[];
  gd: boolean[];
};

const Picture = (props: Props) => {
  const initState = {
    mt: [false],
    rv: [false],
    gd: [false],
  };
  const [currentPictures, setCurrentPictures] =
    useState<CurrentState>(initState);
  const { userInfo } = useAuthContext();
  const uid = userInfo?.uid;

  useEffect(() => {
    (async () => {
      const correctionRef = uid
        ? query(collection(db, "userStatus"), where("uid", "==", uid))
        : query(collection(db, "userStatus"), where("uid", "==", ""));
      const querySnapshot = await getDocs(correctionRef);
      const [currentPicturesState] = querySnapshot.docs.map((doc) => {
        const currentPicturesData = doc.data().pictures;
        return currentPicturesData;
      });
      console.log(currentPicturesState);
      setCurrentPictures(currentPicturesState);
    })();
  }, [uid]);

  return (
    <Layout>
      <PictureCard
        mtCardItems={props.mtList}
        rvCardItems={props.rvList}
        gdCardItems={props.gdList}
        currentState={currentPictures}
      />
    </Layout>
  );
};

export async function getServerSideProps() {
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
