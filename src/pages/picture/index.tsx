import type { NextPage } from "next";
import Layout from "pages/layout";
import HomeCard from "components/Card/HomeCard";

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
    <Layout>
      <HomeCard insectsInfo={cardItems} />
    </Layout>
  );
};

export default Home;
