import { useRouter } from "next/router";
import Layout from "pages/layout";
import { adminDB } from "utils/server";
import { GetServerSideProps } from "next";
import { writeUserLog, writePlaceLog, UserLog, PlaceLog } from "utils/writeLog";
import { ParsedUrlQuery } from "querystring";

type Props = {
  preupdateData: PreupdateData;
};

type PreupdateData = {
  documentId: string;
  status: string;
  currentPlace: "none" | number;
  answered: number;
  chartData: ChartData;
  quests: Quests[];
};

type ChartData = {
  gd: number;
  mt: number;
  rv: number;
};

type Quests = "unanswered" | "accept" | "correct" | "incorrect";

const Loading = (props: Props) => {
  const router = useRouter();
  const queryPram = router.query;
  const uid = queryPram.uid as string;

  writeLog(uid, queryPram);

  setTimeout(() => {
    router.push("/");
  }, 3000);

  return (
    <Layout footer={false}>
      <div>
        <h2>データ更新中</h2>
      </div>
    </Layout>
  );
};

const getQuestPlaceInfo = (place: string) => {
  switch (place) {
    case "mt":
      return "mt";
    case "rv":
      return "rv";
    case "gd":
      return "gd";
    default:
      return "mt";
  }
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryPram = context.query;
  const uid = queryPram.uid as string;
  const placeInfo = `${queryPram.place as string}-${
    queryPram.quizId as string
  }`;

  const userQuerySnapshot = await adminDB
    .collection("userStatus")
    .where("uid", "==", uid)
    .get();
  const [userDocData] = userQuerySnapshot.docs.map((doc) => {
    return {
      data: doc.data(),
      id: doc.id,
    };
  });

  // TODO: アップデートするデータ整形
  const updatedChartData = userDocData.data.chartData;
  const place = getQuestPlaceInfo(queryPram.place as string);

  if (queryPram.answer === "true") {
    updatedChartData[place] += 1;
  }

  const updatedQuests = userDocData.data.quests;
  updatedQuests[(Number(queryPram.quizId) as number) - 1] =
    queryPram.answer as Quests;

  await adminDB
    .collection("userStatus")
    .doc(userDocData.id)
    .update({
      state: "search",
      answered: userDocData.data.answered + 1,
      chartData: updatedChartData,
      quests: updatedQuests,
    });

  const placeQuerySnapshot = await adminDB
    .collection("placeState")
    .where("place", "==", placeInfo)
    .get();
  const [placeDocData] = placeQuerySnapshot.docs.map((doc) => {
    return {
      data: doc.data(),
      id: doc.id,
    };
  });
  const currentUids: string[] = placeDocData.data.uids;
  const updateUids = currentUids.filter((n) => n !== uid);
  await adminDB.collection("placeState").doc(placeDocData.id).update({
    uids: updateUids,
    congestion: updateUids.length,
  });

  return {
    props: {},
  };
};

const writeLog = (uid: string, queryPram: ParsedUrlQuery) => {
  const placeInfo = `${queryPram.place as string}-${
    queryPram.quizId as string
  }`;
  const userLog: UserLog = {
    uid: uid,
    state: queryPram.status as string,
    place: placeInfo,
  };
  const placeLog: PlaceLog = {
    type: "qr",
    place: placeInfo,
    congestion: 3,
  };
  (async (userLog: UserLog, placeLog: PlaceLog) => {
    await writeUserLog(userLog);
    await writePlaceLog(placeLog);
  })(userLog, placeLog);
};

export default Loading;
