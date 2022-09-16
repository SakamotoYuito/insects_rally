import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CardComponent from "..";
import styles from "./style.module.scss";

interface Props {
  insectsInfo: InsectsInfo[];
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

  const mtInsects = props.insectsInfo.filter(
    (object: InsectsInfo) => object.place === "mt"
  );
  const rvInsects = props.insectsInfo.filter(
    (object: InsectsInfo) => object.place === "rv"
  );
  const gdInsects = props.insectsInfo.filter(
    (object: InsectsInfo) => object.place === "gd"
  );

  const tabClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = (e.target as HTMLElement).id.split("-")[4];
    setSelected(id);
  };

  return (
    <>
      <h1>昆虫図鑑</h1>
      <Tabs
        defaultActiveKey="mt"
        id="fill-tab-example"
        className="mb-3 "
        fill
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => tabClick(e)}
      >
        <Tab
          tabClassName={selected === "mt" ? styles.selected : styles.tab}
          className={styles.card}
          eventKey="mt"
          title="森林"
        >
          <Row xs={2} md={2} className="g-4">
            {mtInsects.map((insectsInfoObj: InsectsInfo) => (
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
          <Row xs={2} md={2}>
            {rvInsects.map((insectsInfoObj: InsectsInfo) => (
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
          <Row xs={2} md={2} className="g-4">
            {gdInsects.map((insectsInfoObj: InsectsInfo) => (
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
