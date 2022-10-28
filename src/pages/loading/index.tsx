import { useRouter } from "next/router";
import Layout from "pages/layout";
import { adminDB } from "utils/server";
import { GetServerSideProps } from "next";
import { writeUserLog, writePlaceLog, UserLog, PlaceLog } from "utils/writeLog";
import { ParsedUrlQuery } from "querystring";

type Quests = "unanswered" | "accept" | "correct" | "incorrect";

type Props = {
  congestion: number;
  currentUids: string[];
};

const Loading = ({ congestion, currentUids }: Props) => {
  const router = useRouter();
  const queryPram = router.query;
  const uid = queryPram.uid as string;

  writeLog(uid, queryPram, congestion, currentUids);

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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryPram = context.query;
  const uid = queryPram.uid as string;
  const placeInfo = queryPram.place as string;

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

  // TODO: 2倍にする処理
  const progress: number = userDocData.data.progress;
  const place = placeInfo.split("-")[0];
  const rewardPlace = userDocData.data.reward;

  const increasePoint = rewardPlace === place ? 10 : 5;

  const updatedProgress =
    queryPram.answer === "correct" ? progress + increasePoint : progress;
  const updatedStatus = setStatus(updatedProgress);

  const updatedQuests = userDocData.data.quests;
  updatedQuests[placeInfo] = queryPram.answer as Quests;

  await adminDB
    .collection("userStatus")
    .doc(userDocData.id)
    .update({
      state: "search",
      answered: userDocData.data.answered + 1,
      progress: updatedProgress,
      quests: updatedQuests,
      status: updatedStatus,
    });

  const placeDoc = await adminDB.collection("placeState").doc("place").get();
  const placeDocData = {
    data: placeDoc.data(),
    id: placeDoc.id,
  };
  const currentUids: string[] = placeDocData.data?.uids;
  const updateUids = currentUids.filter((n) => n !== uid);
  await adminDB.collection("placeState").doc(placeDocData.id).update({
    uids: updateUids,
    congestion: updateUids.length,
  });

  return {
    props: {
      congestion: updateUids.length,
      currentUids: currentUids,
    },
  };
};

const writeLog = (
  uid: string,
  queryPram: ParsedUrlQuery,
  congestion: number,
  currentUids: string[]
) => {
  const placeInfo = queryPram.place as string;
  const userLog: UserLog = {
    uid: uid,
    state: queryPram.status as string,
    place: placeInfo,
  };
  const placeLog: PlaceLog = {
    uids: currentUids,
    type: "qr",
    place: placeInfo,
    congestion: congestion,
  };
  (async (userLog: UserLog, placeLog: PlaceLog) => {
    await writeUserLog(userLog);
    await writePlaceLog(placeLog);
  })(userLog, placeLog);
};

const setStatus = (progress: number) => {
  if (progress < 25) {
    return "生き物好き";
  } else if (progress < 50) {
    return "生き物探検家";
  } else if (progress < 75) {
    return "生き物ハンター";
  } else if (progress < 100) {
    return "生き物研究家";
  } else if (progress === 100) {
    return "生き物博士";
  }
};

export default Loading;
