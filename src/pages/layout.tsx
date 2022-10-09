import Header from "components/Header";
import Footer from "components/Footer";
import styles from "./style.module.scss";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.body}>
      <Header />
      <main className={styles.layout}>
        <div className={styles.main}>{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
