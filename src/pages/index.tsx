import { useState } from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import styles from "./style.module.scss";
import dynamic from "next/dynamic";
const RadarChartComponent = dynamic(() => import("../components/Chart"), {
  ssr: false,
});

const Home = () => {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <h1>ステータス</h1>
        <RadarChartComponent />
      </div>
      <Footer />
    </>
  );
};

export default Home;
