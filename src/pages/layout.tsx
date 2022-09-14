import Header from "components/Header";
import Footer from "components/Footer";
import styles from "./style.module.scss";
import dynamic from "next/dynamic";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>
        <div className={styles.main}>{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
