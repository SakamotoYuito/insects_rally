import React, { useEffect, useContext } from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import { useAuthContext } from "./loginObserver";
import account from "assets/icon/person-circle.svg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useLogout } from "utils/firebase";

const Header = () => {
  const { userInfo } = useAuthContext();
  const handleLogout = useLogout();
  const currentUserName = userInfo?.email?.split("@")[0];

  return (
    <Navbar className={styles.bar} collapseOnSelect expand="light" bg="">
      <Container>
        <Navbar.Brand className={styles.title} href="/">
          <div>謎解き写真展</div>
        </Navbar.Brand>
        <Navbar.Toggle
          className={styles.toggle}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link className={styles.navlink}>
              <div className={styles.icon}>
                <Image src={account} alt="account" />
              </div>
              {currentUserName}
            </Nav.Link>
            <Nav.Link className={styles.navlink}>
              <Button className={styles.button} onClick={() => handleLogout()}>
                ログアウト
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
