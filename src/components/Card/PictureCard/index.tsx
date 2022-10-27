import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CardComponent from "..";
import styles from "./style.module.scss";

type Props = {
  mtCardItems: InsectsInfo[];
  rvCardItems: InsectsInfo[];
  gdCardItems: InsectsInfo[];
  currentState: CurrentState;
};

export type InsectsInfo = {
  id: number;
  name: string;
  place: string;
  explain: string;
  image: string;
};

type CurrentState = {
  mt: boolean[];
  rv: boolean[];
  gd: boolean[];
};

const PictureCard = (props: Props) => {
  const [selected, setSelected] = useState("mt");

  const tabClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = (e.target as HTMLElement).id.split("-")[4];
    setSelected(id);
  };

  return (
    <>
      <h1>生きものずかん</h1>
      <div className={styles.subtitle}>
        <a>撮影場所</a>
      </div>
      <Tabs
        defaultActiveKey="mt"
        id="fill-tab-example"
        className="mb-2"
        fill
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => tabClick(e)}
      >
        <Tab
          tabClassName={selected === "mt" ? styles.selected : styles.tab}
          className={styles.card}
          eventKey="mt"
          title="森林"
        >
          <Row xs={2} md={3} className="g-2">
            {props.mtCardItems.map((insectsInfoObj: InsectsInfo) => (
              <Col key={insectsInfoObj.id}>
                {props.currentState.mt[insectsInfoObj.id - 1] === true ? (
                  <div className={styles.card}>
                    <CardComponent info={insectsInfoObj} isKnown={true} />
                  </div>
                ) : (
                  <div className={styles.card}>
                    <CardComponent info={insectsInfoObj} isKnown={false} />
                  </div>
                )}
              </Col>
            ))}
          </Row>
        </Tab>
        <Tab
          tabClassName={selected === "rv" ? styles.selected : styles.tab}
          eventKey="rv"
          title="水辺"
        >
          <Row xs={2} md={3} className="g-2">
            {props.rvCardItems.map((insectsInfoObj: InsectsInfo) => (
              <Col key={insectsInfoObj.id}>
                {props.currentState.rv[insectsInfoObj.id - 1] === true ? (
                  <div className={styles.card}>
                    <CardComponent info={insectsInfoObj} isKnown={true} />
                  </div>
                ) : (
                  <div className={styles.card}>
                    <CardComponent info={insectsInfoObj} isKnown={false} />
                  </div>
                )}
              </Col>
            ))}
          </Row>
        </Tab>
        <Tab
          tabClassName={selected === "gd" ? styles.selected : styles.tab}
          eventKey="gd"
          title="野原"
        >
          <Row xs={2} md={3} className="g-2">
            {props.gdCardItems.map((insectsInfoObj: InsectsInfo) => (
              <Col key={insectsInfoObj.id}>
                {props.currentState.gd[insectsInfoObj.id - 1] === true ? (
                  <div className={styles.card}>
                    <CardComponent info={insectsInfoObj} isKnown={true} />
                  </div>
                ) : (
                  <div className={styles.card}>
                    <CardComponent info={insectsInfoObj} isKnown={false} />
                  </div>
                )}
              </Col>
            ))}
          </Row>
        </Tab>
      </Tabs>
    </>
  );
};

export default PictureCard;
