import React, { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import HomeIcon from "assets/icon/Footer/HomeIcon";
import SearchIcon from "assets/icon/Footer/SearchIcon";
import CameraIcon from "assets/icon/Footer/AboutIcon";
import PictureIcon from "assets/icon/Footer/PictureIcon";
import styles from "./style.module.scss";

type Props = {
  disabled: boolean;
};

const Footer = ({ disabled }: Props) => {
  const ref = useRef();
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <div className={styles.footer}>
      {currentPath === "/" || disabled === true ? (
        <HomeIcon ref={ref} current={true} />
      ) : (
        <Link href="/">
          <a>
            <HomeIcon ref={ref} current={false} />
          </a>
        </Link>
      )}
      {currentPath === "/picture" || disabled === true ? (
        <PictureIcon ref={ref} current={true} />
      ) : (
        <Link href="/picture">
          <a>
            <PictureIcon ref={ref} current={false} />
          </a>
        </Link>
      )}
      {currentPath === "/search" || disabled === true ? (
        <SearchIcon ref={ref} current={true} />
      ) : (
        <Link href="/search">
          <a>
            <SearchIcon ref={ref} current={false} />
          </a>
        </Link>
      )}
      {currentPath === "/about" || disabled === true ? (
        <CameraIcon ref={ref} current={true} />
      ) : (
        <Link href="/about">
          <a>
            <CameraIcon ref={ref} current={false} />
          </a>
        </Link>
      )}
    </div>
  );
};

export default Footer;
