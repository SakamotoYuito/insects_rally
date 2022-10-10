import Header from "components/Header";
import Footer from "components/Footer";
import styles from "./style.module.scss";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  footer?: boolean;
};

const Layout = ({ children, footer }: Props) => {
  return (
    <div className={styles.body}>
      <Header />
      <main className={styles.layout}>
        <div className={styles.main}>{children}</div>
      </main>
      {footer === undefined ? (
        <Footer disabled={false} />
      ) : (
        <Footer disabled={true} />
      )}
      :
    </div>
  );
};

export default Layout;
