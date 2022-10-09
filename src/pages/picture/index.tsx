import Layout from "pages/layout";
import PictureCard, { InsectsInfo } from "components/Card/PictureCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "utils/firebase";

type Props = {
  mtList: InsectsInfo[];
  rvList: InsectsInfo[];
  gdList: InsectsInfo[];
};

const Picture = (props: Props) => {
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

  const mtCollectionRef = collection(db, "pictures");
  const querySnapshot = await getDocs(mtCollectionRef);
  querySnapshot.forEach((doc) => {
    const place = doc.data().picture.place;
    console.log(place);
    switch (place) {
      case "mt":
        mtList.push(doc.data().picture);
        break;
      case "rv":
        rvList.push(doc.data().picture);
        break;
      case "gd":
        gdList.push(doc.data().picture);
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
