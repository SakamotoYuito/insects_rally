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
    {
      id: 11,
      place: "rv",
      name: "例：カワセミ",
      gender: "オス",
      explain: "かわいい",
      image:
        "https://firebasestorage.googleapis.com/v0/b/insect-rally.appspot.com/o/%E6%B0%B4%E8%BE%BA(33)%E3%82%AB%E3%83%AF%E3%82%BB%E3%83%9FIMG_0229.jpg?alt=media&token=94889dce-3b2a-4c47-9fe6-ef43ac9f2a0e",
    },
  ];
  return (
    <Layout>
      <PictureCard insectsInfo={cardItems} />
    </Layout>
  );
};

export default Picture;
