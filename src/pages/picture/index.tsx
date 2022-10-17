import Layout from "pages/layout";
import PictureCard, { InsectsInfo } from "components/Card/PictureCard";
import { adminDB } from "utils/server";
// import { SSGProvider } from "@react-aria/ssg";

type Props = {
  mtList: InsectsInfo[];
  rvList: InsectsInfo[];
  gdList: InsectsInfo[];
};

const Picture = (props: Props) => {
  return (
    // <SSGProvider>
    <Layout>
      <PictureCard
        mtCardItems={props.mtList}
        rvCardItems={props.rvList}
        gdCardItems={props.gdList}
      />
    </Layout>
    // </SSGProvider>
  );
};

export async function getStaticProps() {
  const mtList: InsectsInfo[] = [];
  const rvList: InsectsInfo[] = [];
  const gdList: InsectsInfo[] = [];

  const querySnapshot = await adminDB.collection("pictures").get();
  querySnapshot.forEach((doc) => {
    const picture = doc.data() as InsectsInfo;
    const place = picture.place;
    switch (place) {
      case "mt":
        mtList.push(picture);
        break;
      case "rv":
        rvList.push(picture);
        break;
      case "gd":
        gdList.push(picture);
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
