import type { NextPage } from "next";
import Header from "components/Header";
import Footer from "components/Footer";
import HomeCard from "components/Card/HomeCard";
import styles from "./style.module.scss";

const Home: NextPage = () => {
  const cardItems = [
    { id: 1, place: "mt", name: "アゲハ蝶", classify: "蝶類", season: "夏" },
    { id: 2, place: "rv", name: "アゲハ蝶", classify: "蝶類", season: "夏" },
    { id: 3, place: "rv", name: "アゲハ蝶", classify: "蝶類", season: "夏" },
    { id: 4, place: "gd", name: "アゲハ蝶", classify: "蝶類", season: "夏" },
  ];
  return (
    <>
      <Header />
      <div className={styles.main}>
        <HomeCard insectsInfo={cardItems} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
