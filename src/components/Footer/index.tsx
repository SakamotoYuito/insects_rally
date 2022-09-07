import React, { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import HomeIcon from "assets/icon/Footer/HomeIcon";
import SearchIcon from "assets/icon/Footer/SearchIcon";
import CameraIcon from "assets/icon/Footer/CameraIcon";
import NoticeIcon from "assets/icon/Footer/NoticeIcon";
import styles from "./style.module.scss";

const Footer = () => {
  const ref = useRef();
  const router = useRouter();
  const currentPath = router.pathname;
  //   console.log(currentPath);

  return (
    <div className={styles.footer}>
      {currentPath === "/" ? (
        <HomeIcon ref={ref} current={true} />
      ) : (
        <Link href="/">
          <a>
            <HomeIcon ref={ref} current={false} />
          </a>
        </Link>
      )}
      {currentPath === "/search" ? (
        <HomeIcon ref={ref} current={true} />
      ) : (
        <Link href="/search">
          <a>
            <SearchIcon ref={ref} current={false} />
          </a>
        </Link>
      )}
      {currentPath === "/camera" ? (
        <CameraIcon ref={ref} current={true} />
      ) : (
        <Link href="/camera">
          <a>
            <CameraIcon ref={ref} current={false} />
          </a>
        </Link>
      )}
      {currentPath === "/notice" ? (
        <NoticeIcon ref={ref} current={true} />
      ) : (
        <Link href="/notice">
          <a>
            <NoticeIcon ref={ref} current={false} />
          </a>
        </Link>
      )}
    </div>
  );
};

export default Footer;
