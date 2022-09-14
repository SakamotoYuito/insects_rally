import { useState } from "react";
import Layout from "pages/layout";
import dynamic from "next/dynamic";
const RadarChartComponent = dynamic(() => import("../components/Chart"), {
  ssr: false,
});

const Home = () => {
  return (
    <Layout>
      <h1>ステータス</h1>
      <RadarChartComponent />
      <h1>ランク</h1>
      <h2>昆虫博士</h2>
    </Layout>
  );
};

export default Home;
