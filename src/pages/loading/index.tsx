import { useRouter } from "next/router";
import Layout from "pages/layout";
import { adminDB } from "utils/server";
import { GetServerSideProps } from "next";
import { writeLog, Log } from "utils/writeLog";

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

type Quests = "unanswered" | "correct" | "incorrect";

const Loading = (props: Props) => {
  const router = useRouter();
  const queryPram = router.query;
  const placeInfo =
    (queryPram.place as string) + "-" + (queryPram.quizId as string);
  console.log(placeInfo);
  const log: Log = {
    uid: queryPram.uid as string,
    state: queryPram.status as string,
    place: placeInfo,
  };

  const addLog = async (log: Log) => {
    await writeLog(log);
  };
  addLog(log);

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
  const uid = queryPram.uid;

  const preupdateData: PreupdateData = {
    documentId: "",
    status: "",
    currentPlace: "none",
    answered: 0,
    chartData: { gd: 0, mt: 0, rv: 0 },
    quests: ["unanswered"],
  };

  const querySnapshot = await adminDB
    .collection("userStatus")
    .where("uid", "==", uid)
    .get();
  querySnapshot.forEach((doc) => {
    const docData = doc.data();
    preupdateData.documentId = doc.id;
    preupdateData.currentPlace = docData.currentPlace;
    preupdateData.answered = docData.answered;
    preupdateData.chartData = docData.chartData;
    preupdateData.quests = docData.quests;
  });

  // TODO: アップデートするデータ整形
  const updatedChartData = preupdateData.chartData;
  const place = getQuestPlaceInfo(queryPram.place as string);

  if (queryPram.answer === "true") {
    updatedChartData[place] += 1;
  }

  const updatedQuests = preupdateData.quests;
  updatedQuests[(Number(queryPram.quizId) as number) - 1] =
    queryPram.answer as Quests;

  await adminDB
    .collection("userStatus")
    .doc(preupdateData.documentId)
    .update({
      status: "search",
      answered: preupdateData.answered + 1,
      chartData: updatedChartData,
      quests: updatedQuests,
    });

  return {
    props: {},
  };
};

export default Loading;
