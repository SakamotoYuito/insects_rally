import type { NextPage } from "next";
import Header from "components/Header";
import Footer from "components/Footer";
import HomeCard from "components/Card/HomeCard";
import styles from "./style.module.scss";

const Home: NextPage = () => {
  const cardItems = [
    {
      id: 1,
      place: "mt",
      name: "例：カマキリ",
      gender: "オス",
      explain: "鋭い爪を持っている",
    },
    {
      id: 2,
      place: "mt",
      name: "例：カマキリ",
      gender: "オス",
      explain: "鋭い爪を持っている",
    },
    {
      id: 3,
      place: "mt",
      name: "例：カマキリ",
      gender: "オス",
      explain: "鋭い爪を持っている",
    },
    {
      id: 4,
      place: "mt",
      name: "例：カマキリ",
      gender: "オス",
      explain: "鋭い爪を持っている",
    },
    {
      id: 5,
      place: "mt",
      name: "例：カマキリ",
      gender: "オス",
      explain: "鋭い爪を持っている",
    },
    {
      id: 6,
      place: "mt",
      name: "例：カマキリ",
      gender: "オス",
      explain: "鋭い爪を持っている",
    },
    {
      id: 7,
      place: "mt",
      name: "例：カマキリ",
      gender: "オス",
      explain: "鋭い爪を持っている",
    },
    {
      id: 8,
      place: "mt",
      name: "例：カマキリ",
      gender: "オス",
      explain: "鋭い爪を持っている",
    },
    {
      id: 9,
      place: "mt",
      name: "例：カマキリ",
      gender: "オス",
      explain: "鋭い爪を持っている",
    },
    {
      id: 10,
      place: "mt",
      name: "例：カマキリ",
      gender: "オス",
      explain: "鋭い爪を持っている",
    },
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
