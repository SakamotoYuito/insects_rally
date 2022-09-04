import React from "react";
import Image from 'next/image'
import styles from './style.module.scss'
import account from 'assets/icon/person-circle.svg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { listenUserAuth, logout } from 'utils/firebase/firebase'

const Header = () => {
  const name = listenUserAuth()
  return (
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
              {name}
            </Nav.Link>
            <Nav.Link className={styles.navlink}>
              <Button onClick={() => logout()}>ログアウト</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header