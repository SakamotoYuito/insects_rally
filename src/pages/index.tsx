import type { NextPage } from "next";
import Header from "components/Header";
import Footer from "components/Footer";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

export default Home;
