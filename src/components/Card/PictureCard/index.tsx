import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CardComponent from "..";
import styles from "./style.module.scss";

interface Props {
  mtCardItems: InsectsInfo[];
  rvCardItems: InsectsInfo[];
  gdCardItems: InsectsInfo[];
}

export interface InsectsInfo {
  id: number;
  name: string;
  place: string;
  gender: string;
  explain: string;
  image: string;
}

const PictureCard = (props: Props) => {
  const [selected, setSelected] = useState("mt");

  // const mtCardItems = props.insectsInfo.filter(
  //   (object: InsectsInfo) => object.place === "mt"
  // );
  // const rvCardItems = props.insectsInfo.filter(
  //   (object: InsectsInfo) => object.place === "rv"
  // );
  // const gdCardItems = props.insectsInfo.filter(
  //   (object: InsectsInfo) => object.place === "gd"
  // );

  const tabClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = (e.target as HTMLElement).id.split("-")[4];
    setSelected(id);
  };

  return (
    <>
      <h1>生きものずかん</h1>
      <Tabs
        defaultActiveKey="mt"
        id="fill-tab-example"
        className="mb-3"
        fill
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => tabClick(e)}
      >
        <Tab
          tabClassName={selected === "mt" ? styles.selected : styles.tab}
          className={styles.card}
          eventKey="mt"
          title="森林"
        >
          <Row xs={2} md={3} className="g-4">
            {props.mtCardItems.map((insectsInfoObj: InsectsInfo) => (
              <Col key={insectsInfoObj.id}>
                <div className={styles.card}>
                  <CardComponent info={insectsInfoObj} />
                </div>
              </Col>
            ))}
          </Row>
        </Tab>
        <Tab
          tabClassName={selected === "rv" ? styles.selected : styles.tab}
          eventKey="rv"
          title="水辺"
        >
          <Row xs={2} md={3}>
            {props.rvCardItems.map((insectsInfoObj: InsectsInfo) => (
              <Col key={insectsInfoObj.id}>
                <div className={styles.card}>
                  <CardComponent info={insectsInfoObj} />
                </div>
              </Col>
            ))}
          </Row>
        </Tab>
        <Tab
          tabClassName={selected === "gd" ? styles.selected : styles.tab}
          eventKey="gd"
          title="野原"
        >
          <Row xs={2} md={3} className="g-4">
            {props.gdCardItems.map((insectsInfoObj: InsectsInfo) => (
              <Col key={insectsInfoObj.id}>
                <div className={styles.card}>
                  <CardComponent info={insectsInfoObj} />
                </div>
              </Col>
            ))}
          </Row>
        </Tab>
      </Tabs>
    </>
  );
};

export default PictureCard;
