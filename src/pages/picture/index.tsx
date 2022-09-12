import type { NextPage } from "next";
import Layout from "pages/layout";
import PictureCard from "components/Card/PictureCard";

const Picture: NextPage = () => {
  const cardItems = [
    {
      id: 1,
      place: "mt",
      name: "例：カマキリ",
      gender: "オス",
      explain: "鋭い爪を持っている",
      image: "/kamakiri.jpg",
    },
    {
      id: 2,
      place: "mt",
      name: "例：カマキリ",
      gender: "オス",
      explain: "鋭い爪を持っている",
      image: "/kamakiri.jpg",
    },
    {
      id: 3,
      place: "mt",
      name: "例：カマキリ",
      gender: "オス",
      explain: "鋭い爪を持っている",
      image: "/kamakiri.jpg",
    },
    {
      id: 4,
      place: "mt",
      name: "例：カマキリ",
      gender: "オス",
      explain: "鋭い爪を持っている",
      image: "/kamakiri.jpg",
    },
    {
      id: 5,
      place: "mt",
      name: "例：カマキリ",
      gender: "オス",
      explain: "鋭い爪を持っている",
      image: "/kamakiri.jpg",
    },
    {
      id: 6,
      place: "mt",
      name: "例：カマキリ",
      gender: "オス",
      explain: "鋭い爪を持っている",
      image: "/kamakiri.jpg",
    },
    {
      id: 7,
      place: "mt",
      name: "例：カマキリ",
      gender: "オス",
      explain: "鋭い爪を持っている",
      image: "/kamakiri.jpg",
    },
    {
      id: 8,
      place: "mt",
      name: "例：カマキリ",
      gender: "オス",
      explain: "鋭い爪を持っている",
      image: "/kamakiri.jpg",
    },
    {
      id: 9,
      place: "mt",
      name: "例：カマキリ",
      gender: "オス",
      explain: "鋭い爪を持っている",
      image: "/kamakiri.jpg",
    },
    {
      id: 10,
      place: "mt",
      name: "例：カマキリ",
      gender: "オス",
      explain: "鋭い爪を持っている",
      image: "/kamakiri.jpg",
    },
  ];
  return (
    <Layout>
      <PictureCard insectsInfo={cardItems} />
    </Layout>
  );
};

export default Picture;
