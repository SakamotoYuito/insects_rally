import Layout from "pages/layout";
import RadarChartComponent from "components/Chart";
import TableComponent from "components/Table";
import { useMemo, useState, useEffect } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "utils/firebase";
import { useAuthContext } from "components/Header/loginObserver";

const Home = () => {
  const { userInfo } = useAuthContext();
  const uid = userInfo?.uid;

  const initLines = useMemo(() => {
    return [
      {
        key: "ステータス",
        value: "",
      },
      {
        key: "トロフィー",
        value: 10,
      },
    ];
  }, []);

  const [tableData, setTableData] = useState(initLines);

  useEffect(() => {
    const usersCollectionRef = uid
      ? query(collection(db, "userStatus"), where("uid", "==", uid))
      : query(collection(db, "userStatus"), where("uid", "==", ""));
    onSnapshot(usersCollectionRef, (querySnapshot) => {
      querySnapshot.docs.map((doc) => {
        initLines[0].value = doc.data().status;
        setTableData(
          tableData.map((data, index) =>
            index === 0 ? { key: "ステータス", value: doc.data().status } : data
          )
        );
      });
    });
    // eslint-disable-next-line
  }, [initLines, uid]);

  return (
    <Layout>
      <h1>ステータス</h1>
      <RadarChartComponent />
      <TableComponent title="詳細情報" lines={tableData} />
    </Layout>
  );
};

export default Home;
