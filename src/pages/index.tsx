import { useState } from "react";
import Layout from "pages/layout";
import RadarChartComponent from "components/Chart";
import TableComponent from "components/Table";
// import dynamic from "next/dynamic";
// const RadarChartComponent = dynamic(() => import("../components/Chart"), {
//   ssr: false,
// });

const Home = () => {
  const lines = [
    {
      key: "ステータス",
      value: "昆虫博士",
    },
    {
      key: "獲得トロフィー",
      value: "10",
    },
  ];
  return (
    <Layout>
      <h1>ステータス</h1>
      <RadarChartComponent />
      <TableComponent title="詳細情報" lines={lines} />
    </Layout>
  );
};

export default Home;
