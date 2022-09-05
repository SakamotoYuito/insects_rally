import React from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import { AuthProvider, useAuthContext } from "./hook";
import account from "assets/icon/person-circle.svg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { logout } from "utils/firebase/firebase";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const { user } = useAuthContext();
  const isLogIn = !!user;
  if (typeof window !== "undefined") {
    if (!isLogIn) {
      router.push("/login");
    }
  }
  const currentUserName = user?.email?.split("@")[0];

  return (
    <AuthProvider>
      <Navbar className={styles.bar} collapseOnSelect expand="light" bg="">
        <Container>
          <Navbar.Brand href="/">昆虫ラリー</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link className={styles.navlink}>
                <div className={styles.icon}>
                  <Image src={account} alt="account" />
                </div>
                {currentUserName}
              </Nav.Link>
              <Nav.Link className={styles.navlink}>
                <Button className={styles.button} onClick={() => logout()}>
                  ログアウト
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </AuthProvider>
  );
};

export default Header;
